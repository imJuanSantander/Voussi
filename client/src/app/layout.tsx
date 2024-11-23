import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Voussi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#000] overflow-hidden ${jakarta.className}`}
      >
        {children}
      </body>
    </html>
  );
}
