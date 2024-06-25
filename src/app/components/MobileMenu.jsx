"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../data/navLinks";

export default function MobileMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={isMobileMenuOpen ? "hidden" : "lg:hidden"}>
        <button
          id="open-mobile-menu"
          aria-label="open-mobile-menu"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="h-8 w-8" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <button
          id="close-mobile-menu"
          aria-label="close-mobile-menu"
          onClick={toggleMobileMenu}
          className="lg:hidden z-[9998] animate__animated animate__rotateIn"
        >
          <AiOutlineClose className="h-8 w-8" />
        </button>
      )}

      {isMobileMenuOpen && (
        <nav className="lg:hidden fixed flex flex-col h-full inset-0 bg-primaryLight opacity-[98%] z-[9000] animate__animated animate__slideInDown text-4xl">
          <h1 className="p-5 h-[var(--header-height)] border-b">Logo</h1>
          <div className="flex flex-col h-full items-start justify-startborder-t">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                className="border-b w-full p-5"
                onClick={toggleMobileMenu}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
