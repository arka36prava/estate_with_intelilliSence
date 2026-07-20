import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIProvider from "@/components/ai/AIProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "AI Real Estate",
  description: "AI Powered Real Estate Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>

          <Navbar />

          {children}

          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="dark"
          />

          <AIProvider />

        </body>
      </html>
    </ClerkProvider>
  );
}