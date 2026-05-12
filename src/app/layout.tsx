import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Odionye Jovita | Full-Stack Developer & Security Engineer",
  description:
    "Full-Stack Developer & Security Engineer — building secure, scalable systems with Node.js, Python, and cloud-native technologies.",
  keywords:
    "Odionye Jovita, ByJove, Full Stack Developer, Cybersecurity, Backend Developer, Node.js, Python, MongoDB, API Development, Portfolio",
  openGraph: {
    title: "Odionye Jovita | Full-Stack Developer & Security Engineer",
    description:
      "Secure APIs. Clean Code. Reliable Infrastructure. Full-Stack Developer & Security Engineer.",
    type: "website",
    url: "https://www.byjovetech.netlify.app/",
    siteName: "ByJove Tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <link
          rel="shortcut icon"
          href="/images/digital-services.png"
          type="image/png"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
