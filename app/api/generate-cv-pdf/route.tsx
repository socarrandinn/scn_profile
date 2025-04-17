// app/api/generate-pdf/route.ts
import { NextResponse, NextRequest } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvTemplate } from "@/components/cv/cv-template";
import initTranslations from "@/app/i18n";
import i18nConfig from "@/next-i18next.config";

const i18nNamespaces = [
  "common",
  "errors",
  "about-me",
  "experience",
  "education",
  "resumen",
];
export async function GET(request: NextRequest) {
  try {
    // Get the current locale from the cookie or use the default
    const locale =
      request?.cookies?.get("NEXT_LOCALE")?.value || i18nConfig?.defaultLocale;

    // Inicializar i18next en el servidor
    const { t } = await initTranslations(locale, i18nNamespaces);

    // Generar PDF con las traducciones
    const pdfBuffer = await renderToBuffer(<CvTemplate t={t} />);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="cv-${locale}.pdf"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Error generating PDF" },
      { status: 500 },
    );
  }
}
