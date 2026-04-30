import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CVDocument } from "@/app/lib/cvDocument";

export async function GET() {
  try {
    const pdfBuffer = await renderToBuffer(CVDocument());

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Tegar-Faris-Nurhakim-CV.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF CV" },
      { status: 500 },
    );
  }
}
