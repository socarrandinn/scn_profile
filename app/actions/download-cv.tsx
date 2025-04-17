// app/actions/download-cv.ts
export const downloadCV = async () => {
  try {
    const res = await fetch("/api/generate-cv-pdf");

    if (!res.ok) {
      throw new Error("No se pudo generar el PDF");
    }
  } catch (error) {
    console.error("Error al descargar el CV:", error);
  }
};
