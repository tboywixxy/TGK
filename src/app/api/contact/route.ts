import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
};

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function socialLinksSection() {
  return `
    <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e8e8e8;text-align:center;">
      <p style="margin:0 0 14px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#aaaaaa;font-family:Georgia,serif;">
        Follow Along
      </p>
      <div style="text-align:center;">
        <a href="https://instagram.com/theguardianskeeperr" target="_blank"
          style="display:inline-block;margin:0 10px;text-decoration:none;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#111111;font-family:Arial,Helvetica,sans-serif;">
          Instagram
        </a>
        <span style="color:#cccccc;font-size:11px;">·</span>
        <a href="https://twitter.com/TheeguardiansK" target="_blank"
          style="display:inline-block;margin:0 10px;text-decoration:none;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#111111;font-family:Arial,Helvetica,sans-serif;">
          Twitter
        </a>
        <span style="color:#cccccc;font-size:11px;">·</span>
        <a href="https://linkedin.com/company/the-guardians-keeper" target="_blank"
          style="display:inline-block;margin:0 10px;text-decoration:none;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#111111;font-family:Arial,Helvetica,sans-serif;">
          LinkedIn
        </a>
      </div>
    </div>
  `;
}

function adminEmailTemplate(data: ContactPayload) {
  return `
    <div style="margin:0;padding:0;background:#f4f4f2;font-family:Arial,Helvetica,sans-serif;color:#111111;">
      <div style="max-width:600px;margin:0 auto;padding:40px 16px;">
        <div style="background:#ffffff;border:1px solid #e0e0e0;">

          <div style="padding:36px 32px 28px 32px;border-bottom:2px solid #111111;">
            <img
              src="https://res.cloudinary.com/df2e1ug1q/image/upload/v1774526123/WhatsApp_Image_2026-03-22_at_09.55.04_iayzwa.jpg"
              alt="The Guardians' Keeper"
              style="max-width:72px;height:auto;display:block;margin:0 auto 20px auto;"
            />
            <p style="margin:0;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#aaaaaa;text-align:center;font-family:Arial,Helvetica,sans-serif;">
              The Guardians' Keeper
            </p>
            <h1 style="margin:8px 0 0 0;font-size:20px;line-height:1.3;font-weight:700;color:#111111;text-align:center;font-family:Georgia,serif;">
              New Contact Form Submission
            </h1>
          </div>

          <div style="padding:36px 32px 28px 32px;">
            <p style="margin:0 0 24px 0;font-size:14px;line-height:1.9;color:#444444;font-family:Arial,Helvetica,sans-serif;">
              A new visitor has submitted the contact form on your website.
            </p>

            <table width="100%" cellPadding="0" cellSpacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:14px 0;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#aaaaaa;vertical-align:top;padding-right:16px;">
                  First Name
                </td>
                <td style="padding:14px 0;color:#111111;font-size:14px;">
                  ${escapeHtml(data.firstName)}
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#aaaaaa;vertical-align:top;padding-right:16px;">
                  Last Name
                </td>
                <td style="padding:14px 0;color:#111111;font-size:14px;">
                  ${escapeHtml(data.lastName)}
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#aaaaaa;vertical-align:top;padding-right:16px;">
                  Email
                </td>
                <td style="padding:14px 0;color:#111111;font-size:14px;">
                  <a href="mailto:${escapeHtml(data.email)}" style="color:#111111;text-decoration:underline;">
                    ${escapeHtml(data.email)}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#aaaaaa;vertical-align:top;padding-right:16px;">
                  Interest
                </td>
                <td style="padding:14px 0;color:#111111;font-size:14px;">
                  ${escapeHtml(data.interest)}
                </td>
              </tr>
            </table>

            <div style="margin-top:28px;">
              <p style="margin:0 0 12px 0;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#aaaaaa;">
                Message
              </p>
              <div style="padding:20px;background:#f9f9f8;border-left:3px solid #111111;">
                <p style="margin:0;font-size:14px;line-height:1.9;white-space:pre-line;color:#333333;font-family:Georgia,serif;">
                  ${escapeHtml(data.message)}
                </p>
              </div>
            </div>

            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${escapeHtml(data.email)}"
                style="display:inline-block;padding:12px 28px;background:#111111;color:#ffffff;text-decoration:none;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">
                Reply to ${escapeHtml(data.firstName)}
              </a>
            </div>

            ${socialLinksSection()}
          </div>

          <div style="padding:20px 32px;background:#f9f9f8;border-top:1px solid #e8e8e8;text-align:center;">
            <p style="margin:0;font-size:11px;color:#bbbbbb;font-family:Arial,Helvetica,sans-serif;">
              The Guardians' Keeper &mdash; Internal Notification
            </p>
          </div>

        </div>
      </div>
    </div>
  `;
}

function userConfirmationTemplate(data: ContactPayload) {
  return `
    <div style="margin:0;padding:0;background:#f4f4f2;font-family:Arial,Helvetica,sans-serif;color:#111111;">
      <div style="max-width:600px;margin:0 auto;padding:40px 16px;">
        <div style="background:#ffffff;border:1px solid #e0e0e0;">

          <div style="padding:36px 32px 28px 32px;border-bottom:2px solid #111111;">
            <img
              src="https://res.cloudinary.com/df2e1ug1q/image/upload/v1774526123/WhatsApp_Image_2026-03-22_at_09.55.04_iayzwa.jpg"
              alt="The Guardians' Keeper"
              style="max-width:72px;height:auto;display:block;margin:0 auto 20px auto;"
            />
            <p style="margin:0;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#aaaaaa;text-align:center;font-family:Arial,Helvetica,sans-serif;">
              The Guardians' Keeper
            </p>
            <h1 style="margin:8px 0 0 0;font-size:20px;line-height:1.3;font-weight:700;color:#111111;text-align:center;font-family:Georgia,serif;">
              Message Received
            </h1>
          </div>

          <div style="padding:36px 32px 28px 32px;">
            <p style="margin:0 0 18px 0;font-size:14px;line-height:1.9;color:#444444;font-family:Arial,Helvetica,sans-serif;">
              Hello ${escapeHtml(data.firstName)},
            </p>

            <p style="margin:0 0 20px 0;font-size:14px;line-height:1.9;color:#444444;font-family:Arial,Helvetica,sans-serif;">
              Thank you for reaching out to The Guardians' Keeper. We have received your message and will get back to you as soon as possible.
            </p>

            <div style="margin:28px 0;padding:20px 24px;border-left:3px solid #111111;background:#f9f9f8;">
              <p style="margin:0;font-size:13px;line-height:1.9;color:#666666;font-style:italic;font-family:Georgia,serif;">
                &ldquo;We appreciate your interest in our mission and the work we do. Every message matters to us.&rdquo;
              </p>
            </div>

            <p style="margin:0;font-size:14px;line-height:1.9;color:#444444;font-family:Arial,Helvetica,sans-serif;">
              Warm regards,
            </p>
            <p style="margin:6px 0 0 0;font-size:14px;font-weight:700;color:#111111;font-family:Arial,Helvetica,sans-serif;">
              The Guardians' Keeper Team
            </p>

            ${socialLinksSection()}
          </div>

          <div style="padding:20px 32px;background:#f9f9f8;border-top:1px solid #e8e8e8;text-align:center;">
            <p style="margin:0 0 4px 0;font-size:11px;color:#bbbbbb;font-family:Arial,Helvetica,sans-serif;">
              You're receiving this because you submitted a contact form.
            </p>
            <p style="margin:0;font-size:11px;color:#bbbbbb;font-family:Arial,Helvetica,sans-serif;">
              &copy; The Guardians' Keeper
            </p>
          </div>

        </div>
      </div>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const firstName = body.firstName?.trim() || "";
    const lastName = body.lastName?.trim() || "";
    const email = body.email?.trim() || "";
    const interest = body.interest?.trim() || "";
    const message = body.message?.trim() || "";

    if (!firstName || !lastName || !email || !interest || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.ZOHO_MAIL_USER;
    const smtpPass = process.env.ZOHO_MAIL_PASS;
    const fromEmail = process.env.FROM_EMAIL || smtpUser;

    // Same Yorkshire-style behavior:
    // if CONTACT_OWNER_EMAIL is not set, it falls back to the same Zoho mailbox
    const ownerEmail = process.env.CONTACT_OWNER_EMAIL || smtpUser;

    if (!smtpUser || !smtpPass || !fromEmail || !ownerEmail) {
      console.error("Missing env vars:", {
        ZOHO_MAIL_USER: !!smtpUser,
        ZOHO_MAIL_PASS: !!smtpPass,
        FROM_EMAIL: !!fromEmail,
        CONTACT_OWNER_EMAIL: !!ownerEmail,
      });

      return NextResponse.json(
        {
          error:
            "Missing email environment variables. Required: ZOHO_MAIL_USER, ZOHO_MAIL_PASS, FROM_EMAIL, CONTACT_OWNER_EMAIL.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
      tls: { rejectUnauthorized: false },
      connectionTimeout: 10000,
    });

    const payload: ContactPayload = {
      firstName,
      lastName,
      email,
      interest,
      message,
    };

    // 1) Admin/owner notification
    // Same mailbox can send and receive here
    await transporter.sendMail({
      from: `"The Guardians' Keeper" <${fromEmail}>`,
      to: ownerEmail,
      replyTo: email,
      subject: `New Contact Form Submission — ${interest}`,
      html: adminEmailTemplate(payload),
      text: `
New Contact Form Submission

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Interest: ${interest}

Message:
${message}

Instagram: https://instagram.com/theguardianskeeperr
Twitter: https://twitter.com/TheeguardiansK
LinkedIn: https://linkedin.com/company/the-guardians-keeper
      `.trim(),
    });

    // 2) Visitor confirmation
    await transporter.sendMail({
      from: `"The Guardians' Keeper" <${fromEmail}>`,
      to: email,
      replyTo: fromEmail,
      subject: "We've received your message — The Guardians' Keeper",
      html: userConfirmationTemplate(payload),
      text: `
Hello ${firstName},

Thank you for reaching out to The Guardians' Keeper.
We have received your message and will get back to you as soon as possible.

Warm regards,
The Guardians' Keeper Team

Instagram: https://instagram.com/theguardianskeeperr
Twitter: https://twitter.com/TheeguardiansK
LinkedIn: https://linkedin.com/company/the-guardians-keeper
      `.trim(),
    });

    return NextResponse.json(
      { success: true, message: "Emails sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("CONTACT FORM ERROR:", error?.message);
    console.error("CODE:", error?.code);
    console.error("RESPONSE:", error?.response);

    if (error?.responseCode === 535) {
      console.error(
        "Zoho auth failed — check your app password and that SMTP access is enabled on the mailbox."
      );
    }

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? error?.message || "Failed to send message."
            : "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}