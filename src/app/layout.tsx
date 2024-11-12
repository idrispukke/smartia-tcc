import type { Metadata } from "next";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Smart.Ia",
  description: "Ferramenta de inteligencia artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
