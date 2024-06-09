import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GETABAT",
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
         <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-512x512.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
         <link rel="manifest" href="/site.webmanifest" />
         <body>{children}</body>
    </html>
  );
}
