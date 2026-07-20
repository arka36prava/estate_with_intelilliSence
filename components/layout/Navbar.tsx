"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bot } from "lucide-react";


export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  const [scrolled, setScrolled] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const showTemporarily = () => {
      setShowNavbar(true);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setShowNavbar(false);
      }, 5000);
    };

    const handleScroll = () => {
      showTemporarily();

      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("mousemove", showTemporarily);

    showTemporarily();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", showTemporarily);

      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      <header
        className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-700

        ${showNavbar ? "translate-y-0" : "-translate-y-full"}

        ${
          isHome && !scrolled
            ? "bg-transparent"
            : "backdrop-blur-xl bg-white/70 black:bg-black/50 border-b border-white/20"
        }
      `}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logos/logo_dark.svg"
              width={160}
              height={50}
              alt="AI Real Estate"
              priority
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">

            <Link
              href="/"
              className="text-blue-600 transition-colors duration-300 hover:text-indigo-600"
            >
              Home
            </Link>

            <Link
              href="/properties"
              className="text-blue-600 transition-colors duration-300 hover:text-indigo-600"
            >
              Properties
            </Link>

            <Link
              href="/ai"
              className="text-blue-600 transition-colors duration-300 hover:text-indigo-600"
            >
              AI Assistant
            </Link>

            <Link
              href="/about"
              className="text-blue-600 transition-colors duration-300 hover:text-indigo-600"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-blue-600 transition-colors duration-300 hover:text-indigo-600"
            >
              Contact
            </Link>

          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/ai">
              <button
                className="
                  flex items-center gap-2
                  rounded-full
                  bg-blue-600
                  px-5 py-2.5
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                <Bot size={18} />
                Ask AI
              </button>
            </Link>

            <Link href="/sign-in">
              <button
                className="
                  rounded-full
                  border
                  px-5 py-2.5
                  transition
                  hover:bg-gray-100
                "
              >
                Sign In
              </button>
            </Link>
          </div>
          </div>
          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
          >
            <Menu size={30} />
          </button>

        </div>
      </header>
    </>
  );
}