import type {Metadata} from "next";
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
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-512x512.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
         <link rel="manifest" href="/site.webmanifest" />
         <body>{children}</body>
    </html>
  );
}
