import type { Metadata } from "next";
import { newsreader, geistSans, geistMono } from "./fonts";
import "./globals.css";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlas-technologies.org"),
  title: {
    default: "ATLAS Technologies — Advanced Computing & Systems Engineering",
    template: "%s | ATLAS Technologies",
  },
  description:
    "Pioneering research in ternary logic, deterministic ATLAS OS kernel architecture, conceptual autonomous robotics, and high-reliability systems infrastructure.",
  keywords: [
    "Ternary Computing",
    "Balanced Ternary",
    "ATLAS OS",
    "Microkernel",
    "Autonomous Robotics",
    "Systems Architecture",
    "High-Reliability Infrastructure",
  ],
  authors: [{ name: "ATLAS Technologies Systems & Research Group" }],
  creator: "ATLAS Technologies",
  publisher: "ATLAS Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atlas-technologies.org",
    siteName: "ATLAS Technologies",
    title: "ATLAS Technologies — Advanced Computing & Systems Engineering",
    description:
      "Independent research lab and systems engineering firm investigating alternative computing architectures, deterministic operating systems, and high-reliability infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS Technologies — Advanced Computing & Systems Engineering",
    description:
      "Investigating ternary computing, deterministic microkernels, autonomous robotics, and hardened infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://atlas-technologies.org/#organization",
        name: "ATLAS Technologies",
        url: "https://atlas-technologies.org",
        description:
          "Independent research lab and systems engineering firm investigating alternative computing architectures and deterministic software.",
        email: "contact@atlas-technologies.org",
      },
      {
        "@type": "WebSite",
        "@id": "https://atlas-technologies.org/#website",
        url: "https://atlas-technologies.org",
        name: "ATLAS Technologies",
        publisher: {
          "@id": "https://atlas-technologies.org/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-porcelain text-charcoal font-sans antialiased selection:bg-stone selection:text-charcoal">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
