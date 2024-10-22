import { Inconsolata } from "next/font/google";
import "./globals.css";

const font = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={font.variable}>{children}</body>
    </html>
  );
}
