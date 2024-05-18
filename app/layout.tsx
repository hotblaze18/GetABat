import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get A Bat",
  description: "Top quality sports equipment at affordable prices.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
         <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,700&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" />
         <body>{children}</body>
    </html>
  );
}
