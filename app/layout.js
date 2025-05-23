import { Outfit } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "./navbar";
import Footer from "./footer";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "To Do App",
  description: "Create and manage your tasks like a pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} antialiased`}>
        <AuthProvider>
          <main>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
