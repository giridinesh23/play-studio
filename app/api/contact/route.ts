import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: Connect to email service or database
    console.log("Contact form submission:", {
      name,
      email,
      phone: data.phone || "",
      service: data.service || "",
      eventDate: data.eventDate || "",
      venue: data.venue || "",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
