import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, attendance, language } = body;

    if (!name || !phone || !attendance) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically save to a database
    // For now, we'll just log it
    console.log("RSVP Submission:", {
      name,
      phone,
      attendance,
      language,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "RSVP submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing RSVP:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

