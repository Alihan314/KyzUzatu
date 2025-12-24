import { NextRequest, NextResponse } from "next/server";

// Explicitly set runtime for Vercel compatibility
export const runtime = "nodejs";

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

// Handle OPTIONS requests for CORS (helps with Vercel routing)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

