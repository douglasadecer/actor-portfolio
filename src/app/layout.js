import "../../styles/bootstrap.min.css";
import "../../styles/animate.min.css";
import "../../styles/boxicons.min.css";
import "../../node_modules/react-modal-video/css/modal-video.min.css";
// Global Styles
import "../../styles/style.css";
import "../../styles/responsive.css";
// Global RTL Styles
import "../../styles/rtl.css";

import { Work_Sans, Poppins, Roboto } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";

const work_sans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Douglas Actor - Professional Actor Portfolio",
  description: "Professional actor portfolio showcasing headshots, monologues, and acting experience. Available for film, television, and theater projects.",
  keywords: "actor, portfolio, headshots, monologues, film, television, theater, professional actor",
  authors: [{ name: "Douglas Actor" }],
  openGraph: {
    title: "Douglas Actor - Professional Actor Portfolio",
    description: "Professional actor portfolio showcasing headshots, monologues, and acting experience. Available for film, television, and theater projects.",
    url: "https://douglasadecer.com.au",
    siteName: "Douglas Actor Portfolio",
    images: [
      {
        url: "/images/headshot-1.jpg",
        width: 1200,
        height: 630,
        alt: "Douglas Actor - Professional Actor Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Actor - Professional Actor Portfolio",
    description: "Professional actor portfolio showcasing headshots, monologues, and acting experience.",
    images: ["/images/headshot-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${work_sans.variable} ${poppins.variable} ${roboto.variable}`}
      >
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
