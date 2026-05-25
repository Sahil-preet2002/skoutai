import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";

export const runtime = "nodejs";

const COLLECTION = "waitlist"; // collection name

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }
    const conn = await connectDB();
    const db = conn?.connection?.db;
    if (!db) {
      return NextResponse.json({ error: "Database connection unavailable" }, { status: 500 });
    }
    const collection = db.collection(COLLECTION);
    const existing = await collection.findOne({ email });
    if (!existing) {
      await collection.insertOne({ email, createdAt: new Date() });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("Notify API POST error:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: "Server error", message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const conn = await connectDB();
    const db = conn?.connection?.db;
    if (!db) {
      return NextResponse.json({ error: "Database connection unavailable" }, { status: 500 });
    }
    const collection = db.collection(COLLECTION);
    const list = await collection.find({}, { projection: { _id: 0, email: 1 } }).toArray();
    const emails = list.map((doc) => doc.email);
    return NextResponse.json({ list: emails }, { status: 200 });
  } catch (error: unknown) {
    console.error("Notify API GET error:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: "Server error", message }, { status: 500 });
  }
}
