/*
 * Navbar - ECOTech Eco-Friendly & Warm Design
 * Light background with natural green accents
 * Sticky top navigation with smooth scroll links
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "홈", href: "#home" },
  { label: "회사 소개", href: "#about" },
  { label: "사업 영역", href: "#services" },
  { label: "문의하기", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#2D8659]/20 shadow-md shadow-black/5"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center gap-1">
              <span
                className="text-2xl md:text-3xl font-bold tracking-wider"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  color: "#2D8659",
                }}
              >
                ECO
              </span>
              <span
                className="text-2xl md:text-3xl font-bold tracking-wider"
                style={{ fontFamily: "Oswald, sans-serif", color: "#D4A574" }}
              >
                Tech
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-sm font-medium text-gray-700 hover:text-[#2D8659] transition-colors"
                style={{ fontFamily: "Noto Sans KR, sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 text-sm font-semibold rounded border border-[#2D8659] text-white bg-[#2D8659] hover:bg-[#1F5A3F] hover:border-[#1F5A3F] transition-all duration-200"
              style={{ fontFamily: "Noto Sans KR, sans-serif" }}
            >
              문의하기
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-[#2D8659] transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#2D8659]/20">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-3 px-2 text-gray-700 hover:text-[#2D8659] transition-colors text-sm font-medium border-b border-gray-200 last:border-0"
                style={{ fontFamily: "Noto Sans KR, sans-serif" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-3 py-3 text-sm font-semibold rounded border border-[#2D8659] text-white bg-[#2D8659] hover:bg-[#1F5A3F] transition-all duration-200"
              style={{ fontFamily: "Noto Sans KR, sans-serif" }}
            >
              문의하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
