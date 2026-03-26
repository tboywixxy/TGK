import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs/promises";

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
    <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e5e5e5;text-align:center;">
      <p style="margin:0 0 12px 0;font-size:13px;line-height:1.6;color:#555555;">
        Connect with us
      </p>

      <div style="text-align:center;">
        <a
          href="https://instagram.com/theguardianskeeperr"
          target="_blank"
          style="display:inline-block;margin:0 8px;text-decoration:none;"
        >
          <img
            src="cid:icon_instagram"
            alt="Instagram"
            width="22"
            height="22"
            style="display:block;border:0;outline:none;text-decoration:none;"
          />
        </a>

        <a
          href="https://twitter.com/TheeguardiansK"
          target="_blank"
          style="display:inline-block;margin:0 8px;text-decoration:none;"
        >
          <img
            src="cid:icon_twitter"
            alt="Twitter"
            width="22"
            height="22"
            style="display:block;border:0;outline:none;text-decoration:none;"
          />
        </a>

        <a
          href="https://linkedin.com/company/the-guardians-keeper"
          target="_blank"
          style="display:inline-block;margin:0 8px;text-decoration:none;"
        >
          <img
            src="cid:icon_linkedin"
            alt="LinkedIn"
            width="22"
            height="22"
            style="display:block;border:0;outline:none;text-decoration:none;"
          />
        </a>
      </div>
    </div>
  `;
}

function adminEmailTemplate(data: ContactPayload) {
  return `
    <div style="margin:0;padding:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;color:#111111;">
      <div style="max-width:620px;margin:0 auto;padding:32px 16px;">
        <div style="background:#ffffff;border:1px solid #e5e5e5;overflow:hidden;">
          <div style="padding:32px 24px 20px 24px;text-align:center;border-bottom:1px solid #eeeeee;">
            <img
              src="cid:tgk_logo"
              alt="The Guardians' Keeper Logo"
              style="max-width:90px;height:auto;display:block;margin:0 auto 14px auto;"
            />
            <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:700;color:#111111;">
              New Contact Form Submission
            </h1>
          </div>

          <div style="padding:28px 24px;">
            <p style="margin:0 0 20px 0;font-size:15px;line-height:1.7;color:#333333;">
              You have received a new message from the contact form.
            </p>

            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#222222;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:600;width:140px;">First Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">${escapeHtml(data.firstName)}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:600;">Last Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">${escapeHtml(data.lastName)}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:600;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">${escapeHtml(data.email)}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;font-weight:600;">Interest</td>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">${escapeHtml(data.interest)}</td>
              </tr>
            </table>

            <div style="margin-top:24px;">
              <p style="margin:0 0 10px 0;font-size:13px;font-weight:700;letter-spacing:0.3px;text-transform:uppercase;color:#111111;">
                Message
              </p>
              <div style="padding:16px;border:1px solid #e8e8e8;background:#fafafa;">
                <p style="margin:0;font-size:14px;line-height:1.8;white-space:pre-line;color:#333333;">
                  ${escapeHtml(data.message)}
                </p>
              </div>
            </div>

            ${socialLinksSection()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function userConfirmationTemplate(data: ContactPayload) {
  return `
    <div style="margin:0;padding:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;color:#111111;">
      <div style="max-width:620px;margin:0 auto;padding:32px 16px;">
        <div style="background:#ffffff;border:1px solid #e5e5e5;overflow:hidden;">
          <div style="padding:32px 24px 20px 24px;text-align:center;border-bottom:1px solid #eeeeee;">
            <img
              src="cid:tgk_logo"
              alt="The Guardians' Keeper Logo"
              style="max-width:90px;height:auto;display:block;margin:0 auto 14px auto;"
            />
            <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:700;color:#111111;">
              We’ve Received Your Message
            </h1>
          </div>

          <div style="padding:28px 24px;">
            <p style="margin:0 0 16px 0;font-size:15px;line-height:1.8;color:#333333;">
              Hello ${escapeHtml(data.firstName)},
            </p>

            <p style="margin:0 0 16px 0;font-size:15px;line-height:1.8;color:#333333;">
              Thank you for reaching out to <strong>The Guardians' Keeper</strong>.
              Your message has been received successfully.
            </p>

            <div style="margin:20px 0;padding:16px;border:1px solid #e8e8e8;background:#fafafa;">
              <p style="margin:0;font-size:14px;line-height:1.8;color:#333333;">
                A member of our team will review your message and get back to you as soon as possible.
              </p>
            </div>

            <p style="margin:0 0 14px 0;font-size:15px;line-height:1.8;color:#333333;">
              We appreciate your interest in our mission and the work we do.
            </p>

            <p style="margin:22px 0 0 0;font-size:15px;line-height:1.8;color:#333333;">
              Warm regards,<br />
              <strong>The Guardians' Keeper Team</strong>
            </p>

            ${socialLinksSection()}
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

    const user = process.env.ZOHO_MAIL_USER;
    const pass = process.env.ZOHO_MAIL_PASS;
    const ownerEmail = process.env.CONTACT_OWNER_EMAIL || user;
    const fromEmail = process.env.FROM_EMAIL || user;

    console.log("SMTP DEBUG:", {
      host: "smtp.zoho.com",
      port: 587,
      user,
      ownerEmail,
      fromEmail,
      hasPass: !!pass,
    });

    if (!user || !pass || !ownerEmail || !fromEmail) {
      return NextResponse.json(
        {
          error:
            "Missing email environment variables. Required: ZOHO_MAIL_USER, ZOHO_MAIL_PASS, and optionally CONTACT_OWNER_EMAIL / FROM_EMAIL.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
    });

    const payload: ContactPayload = {
      firstName,
      lastName,
      email,
      interest,
      message,
    };

    const attachments: { filename: string; content: Buffer; cid: string }[] = [];

    // 1. Logo
    try {
      const logoPath = path.join(process.cwd(), "public", "bg-img.jpeg");
      await fs.access(logoPath);
      const logoBuffer = await fs.readFile(logoPath);

      attachments.push({
        filename: "logo.png",
        content: logoBuffer,
        cid: "tgk_logo",
      });
    } catch (err) {
      console.warn(
        "[CONTACT_API] Logo file not found or unreadable, sending email without logo attachment.",
        err
      );
    }

    // 2. Social Icons
    const socialIcons = [
      { name: "instagram.png", cid: "icon_instagram" },
      { name: "twitter.png", cid: "icon_twitter" },
      { name: "linkedin.png", cid: "icon_linkedin" },
    ];

    for (const icon of socialIcons) {
      try {
        const iconPath = path.join(
          process.cwd(),
          "public",
          "email-icons",
          icon.name
        );
        await fs.access(iconPath);
        const iconBuffer = await fs.readFile(iconPath);
        attachments.push({
          filename: icon.name,
          content: iconBuffer,
          cid: icon.cid,
        });
      } catch (err) {
        console.warn(
          `[CONTACT_API] Icon ${icon.name} not found or unreadable.`,
          err
        );
      }
    }

    await transporter.sendMail({
      from: `"The Guardians' Keeper" <${fromEmail}>`,
      to: ownerEmail,
      replyTo: email,
      subject: `New Contact Form Submission - ${interest}`,
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
      attachments,
    });

    await transporter.sendMail({
      from: `"The Guardians' Keeper" <${fromEmail}>`,
      to: email,
      replyTo: fromEmail,
      subject: "We’ve received your message | The Guardians' Keeper",
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
      attachments,
    });

    return NextResponse.json(
      { success: true, message: "Emails sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("CONTACT FORM ERROR FULL:", error);
    console.error("CONTACT FORM ERROR MESSAGE:", error?.message);
    console.error("CONTACT FORM ERROR CODE:", error?.code);
    console.error("CONTACT FORM ERROR RESPONSE:", error?.response);

    if (error?.responseCode === 535) {
      console.error(
        "Zoho authentication failed. Check app password / mailbox access."
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