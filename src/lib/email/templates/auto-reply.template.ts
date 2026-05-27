export function autoReplyTemplate(name: string): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We got your message — Skout AI</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:40px 40px 36px;">
              <a href="${appUrl}" style="text-decoration:none;">
                <img src="${appUrl}/logo.png" alt="Skout AI" height="32" style="display:block;" />
              </a>
              <h1 style="margin:24px 0 0;color:#ffffff;font-size:26px;font-weight:600;letter-spacing:-0.5px;line-height:1.3;">
                Thanks for reaching out, ${name}!
              </h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.8);font-size:15px;line-height:1.6;">
                We've received your message and will get back to you within one business day.
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:36px 40px;">

              <p style="margin:0 0 20px;color:#3f3f46;font-size:15px;line-height:1.7;">
                While you wait, here's what you can explore on Skout AI:
              </p>

              <!-- FEATURE CARDS -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 8px 16px 0;width:50%;vertical-align:top;">
                    <div style="background:#fafafa;border:1px solid #e4e4e7;border-radius:12px;padding:20px;">
                      <div style="font-size:22px;margin-bottom:10px;">🔍</div>
                      <p style="margin:0 0 6px;color:#18181b;font-size:14px;font-weight:600;">Lead Intelligence</p>
                      <p style="margin:0;color:#71717a;font-size:13px;line-height:1.5;">200M+ verified contacts with 40+ filters.</p>
                    </div>
                  </td>
                  <td style="padding:0 0 16px 8px;width:50%;vertical-align:top;">
                    <div style="background:#fafafa;border:1px solid #e4e4e7;border-radius:12px;padding:20px;">
                      <div style="font-size:22px;margin-bottom:10px;">🤖</div>
                      <p style="margin:0 0 6px;color:#18181b;font-size:14px;font-weight:600;">AI SDR Agent</p>
                      <p style="margin:0;color:#71717a;font-size:13px;line-height:1.5;">Finds leads, writes outreach & books meetings.</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 8px 0 0;width:50%;vertical-align:top;">
                    <div style="background:#fafafa;border:1px solid #e4e4e7;border-radius:12px;padding:20px;">
                      <div style="font-size:22px;margin-bottom:10px;">⚡</div>
                      <p style="margin:0 0 6px;color:#18181b;font-size:14px;font-weight:600;">Waterfall Enrichment</p>
                      <p style="margin:0;color:#71717a;font-size:13px;line-height:1.5;">12 vendors, pay only for verified matches.</p>
                    </div>
                  </td>
                  <td style="padding:0 0 0 8px;width:50%;vertical-align:top;">
                    <div style="background:#fafafa;border:1px solid #e4e4e7;border-radius:12px;padding:20px;">
                      <div style="font-size:22px;margin-bottom:10px;">📊</div>
                      <p style="margin:0 0 6px;color:#18181b;font-size:14px;font-weight:600;">Pipeline Analytics</p>
                      <p style="margin:0;color:#71717a;font-size:13px;line-height:1.5;">Full attribution from first touch to closed-won.</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- CTA BUTTONS -->
              <div style="margin-top:32px;text-align:center;">
                <a href="${appUrl}/features"
                   style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:100px;text-decoration:none;margin:0 6px 10px;">
                  Explore Features
                </a>
                <a href="${appUrl}/pricing"
                   style="display:inline-block;background:#ffffff;border:1px solid #e4e4e7;color:#18181b;font-size:14px;font-weight:600;padding:12px 24px;border-radius:100px;text-decoration:none;margin:0 6px 10px;">
                  View Pricing
                </a>
              </div>

            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:#e4e4e7;"></div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <p style="margin:0 0 8px;color:#3f3f46;font-size:14px;font-weight:500;">The Skout AI Team</p>
              <p style="margin:0;color:#a1a1aa;font-size:12px;line-height:1.6;">
                <a href="${appUrl}" style="color:#6366f1;text-decoration:none;">skoutai.io</a>
                &nbsp;·&nbsp;
                <a href="mailto:info@skoutai.io" style="color:#6366f1;text-decoration:none;">info@skoutai.io</a>
              </p>
              <p style="margin:12px 0 0;color:#d4d4d8;font-size:11px;">
                You're receiving this because you submitted a contact form at skoutai.io
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
