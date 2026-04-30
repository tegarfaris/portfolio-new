import { NextResponse } from "next/server";
import { generateCVHTML } from "@/app/lib/cvTemplate";

export async function GET() {
  try {
    const html = generateCVHTML();

    const puppeteer = await import("puppeteer-core");
    const chromiumMod = await import("@sparticuz/chromium");
    const chromium = chromiumMod.default;

    const executablePath = await chromium.executablePath();
    const args = chromium.args;

    const browser = await puppeteer.default.launch({
      args,
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0", bottom: "0", left: "0", right: "0" },
    });

    await browser.close();

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Tegar-Faris-Nurhakim-CV.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    const html = generateCVHTML();
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": 'attachment; filename="Tegar-Faris-Nurhakim-CV.html"',
      },
    });
  }
}
