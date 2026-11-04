import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iPhone Wala | Premium Electronics Hub, Pokaran",
  description: "Pokaran's biggest premium showroom for iPhones, Smart TVs, and ACs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-full flex flex-col bg-black text-white antialiased selection:bg-luxury-cyan selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}