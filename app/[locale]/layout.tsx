import "../css/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";

import { ReactNode } from "react";
import TranslationsProvider from "../contexts/translation-provider";
import i18nConfig from "@/next-i18next.config";
import initTranslations from "../i18n";
import NotFound from "./not-found";
import { cn } from "@/lib/utils";

const lekton = localFont({
  src: [
    {
      path: "../fonts/Lekton-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Lekton-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Lekton-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lekton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOCN",
  description: "Portafolio de desarrollo de software",
};

type Props = {
  children?: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["common", "errors"];

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  if (!i18nConfig.locales.includes(locale)) {
    NotFound();
  }

  return (
    <html lang="en">
      <body className={cn(lekton.className, "antialiased font-lekton")}>
        <NextTopLoader
          color="oklch(47.84% 0.1836 27.01)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #F3736C,0 0 5px oklch(47.84% 0.1836 27.01)"
          template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={999}
          showAtBottom={false}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col lg:flex-row container gap-2 md:gap-4 h-auto lg:max-h-[92vh] mb-5 md:mb-0">
            {children}
          </div>
        </ThemeProvider>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Toaster />
        </TranslationsProvider>
      </body>
    </html>
  );
}
