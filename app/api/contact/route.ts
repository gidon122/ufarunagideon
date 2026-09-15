import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload in request." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { error: "All fields (name, email, subject, message) are required." },
      { status: 400 }
    );
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedSubject = subject.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
    return NextResponse.json(
      { error: "All fields (name, email, subject, message) are required and cannot be empty." },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY environment variable is not configured.");
    return NextResponse.json(
      { error: "Email service is temporarily unavailable. Please try again later." },
      { status: 500 }
    );
  }

  const recipientEmail = process.env.CONTACT_EMAIL || "ufarunagidosky@gmail.com";

  try {
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: trimmedEmail,
      subject: `[Portfolio Contact] ${trimmedSubject}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b;">
          <h2 style="margin-top: 0; color: #0f172a; border-bottom: 2px solid #06b6d4; padding-bottom: 8px;">New Contact Form Submission</h2>
          <p style="margin: 10px 0;"><strong>Sender Name:</strong> ${escapeHtml(trimmedName)}</p>
          <p style="margin: 10px 0;"><strong>Sender Email:</strong> <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #0284c7;">${escapeHtml(trimmedEmail)}</a></p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${escapeHtml(trimmedSubject)}</p>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 6px;"><strong>Message:</strong></p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(trimmedMessage)}</div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            Sent from your portfolio contact form. You can reply directly to this email to respond to ${escapeHtml(trimmedName)}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery failed:", error.message || error.name);
      return NextResponse.json(
        { error: "Failed to send email. Please try again or reach out directly." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Gideon will get back to you shortly.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in contact route:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
