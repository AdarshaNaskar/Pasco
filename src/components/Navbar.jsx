import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const LEFT_NAV_LINKS = [
  { name: "SHOP", href: "#products" },
  { name: "OUR STORY", href: "#story" },
  { name: "SAUCES", href: "#sauces" },
];

const RIGHT_NAV_LINKS = [
  { name: "RECIPES", href: "#recipes" },
  { name: "REVIEWS", href: "#reviews" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isMounted, setIsMounted] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const allLinks = [...LEFT_NAV_LINKS, ...RIGHT_NAV_LINKS];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#EFEBE4]/90 backdrop-blur-md border-b border-[#DCD6CA]/70 shadow-xs"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          
          {/* Left Section: Search & Left Navigation */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Search Icon / Input */}
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center bg-[#DFD9CE] rounded-full px-3 py-1.5 transition-all duration-200">
                  <Search className="w-4 h-4 text-[#33312E] shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search sauces..."
                    className="bg-transparent text-xs text-[#1A1A1A] placeholder-[#666157] focus:outline-none px-2 w-32 sm:w-40"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") setIsSearchOpen(false);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-[#666157] hover:text-[#1A1A1A] p-0.5"
                    aria-label="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-[#33312E] hover:text-[#5A1D2E] transition-colors p-1"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5 stroke-[1.75]" />
                </button>
              )}
            </div>

            {/* Left Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {LEFT_NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative py-1 text-[11px] font-semibold tracking-widest text-[#33312E] uppercase inline-block"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#8B1E3F] transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Center: Pasco Logo (Absolutely Centered) */}
          <a href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-10">
            <img
              src="/Pasco-Logo (1).webp"
              alt="Pasco Foods"
              width={130}
              height={130}
              className="h-[70px] sm:h-[130px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Right Section: Right Navigation & Shopping Cart */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Right Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {RIGHT_NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative py-1 text-[11px] font-semibold tracking-widest text-[#33312E] uppercase inline-block"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#8B1E3F] transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Shopping Cart Button */}
            <button
              type="button"
              className="relative text-[#33312E] hover:text-[#5A1D2E] transition-colors p-1"
              aria-label={`Shopping Bag (${cartCount})`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-[#33312E] text-[9px] font-bold text-white leading-none">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#33312E] hover:text-[#5A1D2E] p-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Rendered at root level via React Portal to prevent stacking context bugs) */}
      {isMounted && isMobileMenuOpen && createPortal(
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Container */}
          <aside className="fixed top-0 right-0 h-[100dvh] w-[280px] z-[9999] bg-[#F2EFE8] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#E6DED2]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E6DED2]">
                <img src="/Pasco-Logo (1).webp" alt="Pasco Foods" width={200} height={100} className="h-[80px] w-auto object-contain" />
                <button type="button" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="p-1 text-[#33312E] hover:text-[#8B1E3F]">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-4 pt-6">
                {allLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-semibold tracking-wider text-[#33312E] hover:text-[#8B1E3F] uppercase transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
}
