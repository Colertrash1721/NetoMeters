// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "NetoMeters",
  description: "NetoMeters es un sistema de monitoreo inteligente que permite a los usuarios rastrear y analizar el consumo de energía en tiempo real, proporcionando información valiosa para mejorar la eficiencia energética y la gestión de medidores.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} h-full antialiased`}
    >
      <head>
        <title>NetoMeters</title>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
