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
  title: "HearMe - React Nextjs Social Media Personal Portfolio Template",
  description: "React Nextjs Social Media Personal Portfolio Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
