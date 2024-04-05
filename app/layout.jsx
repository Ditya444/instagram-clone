import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "Creted by Adit, Arul, Billy, Bimo dan Yovi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
