import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vl.codes",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#eeeeee] dark:bg-background-dark text-black dark:text-white transition-color
            duration-300
            ease-in-out`}
      >
        {children}
      </body>
    </html>
  );
}
