import "../css/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import DataFlowBackground from "@/components/utils/CyberBackground";
import Section from "@/components/containers/section";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from 'nextjs-toploader';  

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${lekton.variable} antialiased font-lekton`}
      >
      
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
          <Section>
            {children}
          </Section>
          <DataFlowBackground />
        </ThemeProvider>
      </body>
    </html>
  );
}
