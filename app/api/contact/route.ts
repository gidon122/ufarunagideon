import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Server-side logging for contact form submissions
    console.log("Contact Form Submission:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject,
      message,
    });

    // Simulated successful submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Gideon will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or reach out directly via email." },
      { status: 500 }
    );
  }
}
