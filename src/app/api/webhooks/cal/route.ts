import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/db/connect";
import Booking from "@/lib/models/booking.model";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get("x-cal-signature-256") || req.headers.get("X-Cal-Signature-256");
    const webhookSecret = process.env.CAL_WEBHOOK_SECRET;

    // Verify webhook signature if secret is defined
    if (webhookSecret && signature) {
      const hmac = crypto.createHmac("sha256", webhookSecret);
      hmac.update(bodyText);
      const computedSignature = hmac.digest("hex");
      if (computedSignature !== signature) {
        console.warn("[cal-webhook] Signature verification failed");
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    const body = JSON.parse(bodyText);
    const triggerEvent = body.triggerEvent || body.event;
    const payload = body.payload || {};

    if (!triggerEvent || !payload) {
      return NextResponse.json({ error: "Invalid webhook payload" }, { status: 400 });
    }

    const attendee = payload.attendees?.[0] || {};
    const email = attendee.email;
    const name = attendee.name || "Anonymous Invitee";

    if (!email) {
      return NextResponse.json({ error: "No attendee email found" }, { status: 400 });
    }

    const startTime = payload.startTime ? new Date(payload.startTime) : new Date();
    const endTime = payload.endTime ? new Date(payload.endTime) : new Date();
    const eventType = payload.title || payload.type || "Demo";
    const meetingLink = payload.videoCallData?.link || payload.metadata?.videoCallUrl || payload.location || "";
    
    await connectDB();

    if (triggerEvent === "BOOKING_CREATED") {
      // Create new booking record
      await Booking.create({
        name,
        email,
        startTime,
        endTime,
        eventType,
        meetingLink,
        status: "created",
        payload: body,
      });
    } else if (triggerEvent === "BOOKING_CANCELLED") {
      // Update status to cancelled
      await Booking.findOneAndUpdate(
        { email, startTime },
        { status: "cancelled", payload: body },
        { new: true }
      );
    } else if (triggerEvent === "BOOKING_RESCHEDULED") {
      // Update status to rescheduled
      await Booking.findOneAndUpdate(
        { email, status: { $ne: "cancelled" } },
        {
          startTime,
          endTime,
          meetingLink,
          status: "rescheduled",
          payload: body,
        },
        { new: true, sort: { createdAt: -1 } }
      );
    }

    return NextResponse.json({ success: true, message: "Webhook processed successfully" });
  } catch (error) {
    console.error("[cal-webhook/POST]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
