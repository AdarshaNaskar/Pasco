import React from "react";
import EmbroideryMandala from "./EmbroideryMandala";

const sisterBrands = [
  { name: "Pasco", logo: "/Pasco-Logo (1).webp" },
  { name: "Al Rifai", logo: "/Al-Rifai-Logo.webp" },
  { name: "Pasta Roma", logo: "/Pasta-Roma-Logo.webp" },
  { name: "Yellow River", logo: "/Yellow-River-Logo.webp" },
  { name: "NYC", logo: "/NYC-Logo.webp" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#F2EFE8] text-[#1F1F1F] pt-12 md:pt-[90px] pb-10 px-6 md:px-[48px] overflow-hidden select-none border-t border-black/[0.06] scroll-mt-20">
      
      {/* Static Decorative Bottom-Right Embroidery Accent (4% Opacity, Non-Rotating) */}
      <div className="absolute -bottom-36 -right-28 pointer-events-none z-0 opacity-[0.04] scale-150">
        <EmbroideryMandala
          size={560}
          showBadge={false}
        />
      </div>

      <div className="max-w-[1440px] mx-auto z-10 relative flex flex-col items-center">
        
        {/* 1. BRAND HEADER ROW: EXTREME LEFT PASCO FOODS LOGO & EXTREME RIGHT SISTER BRANDS */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 mt-2 mb-12">
          
          {/* EXTREME LEFT: Main Pasco Foods Logo Badge */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
            <a href="#" className="inline-block group mb-3">
              <div className="bg-[#8B004A] px-8 py-3.5 rounded-full shadow-md border border-[#7A0041] transition-transform duration-300 group-hover:scale-[1.03] flex items-center justify-center">
                <img
                  src="/Pasco-Foods-Logo-light.webp"
                  alt="Pasco Foods"
                  width={200}
                  height={52}
                  className="h-[42px] sm:h-[52px] w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>
            <div className="flex items-center gap-3">
              <p className="font-sans text-[16px] text-[#6B6762] font-normal">
                Authentic Indian Flavours
              </p>
              <span className="text-[#8B004A] font-light">•</span>
              <span className="font-serif italic text-[16px] text-[#8B004A] font-medium">
                Since 1990
              </span>
            </div>
          </div>

          {/* EXTREME RIGHT: Sister Brand Logos with OUR BRANDS header label on top */}
          <div className="flex flex-col items-center lg:items-end shrink-0">
            <span className="font-sans text-[18px] tracking-[0.2em] uppercase text-[#8B004A] font-semibold mb-3 block">
              OUR BRANDS
            </span>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-5">
              {sisterBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-white/80 border border-black/[0.08] rounded-2xl px-6 sm:px-8 py-4 h-[94px] sm:h-[104px] flex items-center justify-center shadow-2xs hover:border-[#8B004A]/40 hover:scale-105 transition-all duration-300 shrink-0"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    width={210}
                    height={72}
                    className="h-[60px] sm:h-[72px] w-auto max-w-[180px] sm:max-w-[210px] object-contain filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* DIVIDER 1 */}
        <div className="w-full border-t border-black/[0.06] mb-10" />

        {/* 2. MIDDLE BAR: CERTIFIED & TRUSTED BADGES (LEFT) + SOCIAL MEDIA ICONS (EXTREME RIGHT) */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          
          {/* Left: Certified & Trusted Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-sans text-[13px] tracking-[0.18em] uppercase text-[#8B004A] font-semibold shrink-0">
              Certified &amp; Trusted
            </span>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {/* Made in UK Official Badge Seal */}
              <div className="h-[76px] bg-white/70 border border-black/[0.08] rounded-2xl px-5 py-2.5 flex items-center gap-3.5 shadow-2xs hover:border-[#8B004A]/30 transition-colors duration-300">
                <svg className="w-10 h-10 shrink-0 rounded-full overflow-hidden shadow-xs" viewBox="0 0 36 36">
                  <rect width="36" height="36" fill="#00247D"/>
                  <path d="M0 0l36 36M36 0L0 36" stroke="#fff" strokeWidth="4"/>
                  <path d="M0 0l36 36M36 0L0 36" stroke="#CF142B" strokeWidth="2"/>
                  <path d="M18 0v36M0 18h36" stroke="#fff" strokeWidth="7"/>
                  <path d="M18 0v36M0 18h36" stroke="#CF142B" strokeWidth="4"/>
                </svg>
                <div className="flex flex-col text-left justify-center">
                  <span className="font-sans text-[12px] font-bold text-[#1F1F1F] leading-snug uppercase tracking-wider">
                    Made in UK
                  </span>
                  <span className="font-sans text-[11px] text-[#6B6762] mt-0.5 font-normal">
                    Authentic Quality
                  </span>
                </div>
              </div>

              {/* SALSA Approved Food Safety Badge Seal */}
              <div className="h-[76px] bg-white/70 border border-black/[0.08] rounded-2xl px-5 py-2.5 flex items-center gap-3.5 shadow-2xs hover:border-[#8B004A]/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-[#8B004A] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
                  ✓
                </div>
                <div className="flex flex-col text-left justify-center">
                  <span className="font-sans text-[12px] font-bold text-[#1F1F1F] leading-snug uppercase tracking-wider">
                    SALSA Approved
                  </span>
                  <span className="font-sans text-[11px] text-[#6B6762] mt-0.5 font-normal">
                    Food Safety Standard
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Extreme Right: Social Media Icon Buttons */}
          <div className="flex items-center gap-3.5 shrink-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border border-black/[0.12] bg-white/50 text-[#1F1F1F] flex items-center justify-center transition-all duration-300 hover:bg-[#8B004A] hover:text-white hover:border-[#8B004A] hover:scale-[1.08] shadow-2xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full border border-black/[0.12] bg-white/50 text-[#1F1F1F] flex items-center justify-center transition-all duration-300 hover:bg-[#8B004A] hover:text-white hover:border-[#8B004A] hover:scale-[1.08] shadow-2xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-11 h-11 rounded-full border border-black/[0.12] bg-white/50 text-[#1F1F1F] flex items-center justify-center transition-all duration-300 hover:bg-[#8B004A] hover:text-white hover:border-[#8B004A] hover:scale-[1.08] shadow-2xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>

        </div>

        {/* DIVIDER 2 */}
        <div className="w-full border-t border-black/[0.06] mb-10" />

        {/* 3. FOUR-COLUMN NAVIGATION, CONTACT & ADDRESS GRID */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 text-center md:text-left items-start">
          
          {/* Column 1: NAVIGATION */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-sans text-[13px] tracking-[0.18em] uppercase text-[#8B004A] font-semibold mb-3 md:mb-4">
              NAVIGATION
            </h4>
            <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-2.5">
              <a href="#products" className="relative group text-[#1F1F1F] hover:text-[#8B004A] font-sans text-[15px] sm:text-[16px] font-normal transition-colors duration-300">
                <span>Products</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#bundles" className="relative group text-[#1F1F1F] hover:text-[#8B004A] font-sans text-[15px] sm:text-[16px] font-normal transition-colors duration-300">
                <span>Bundles</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#recipes" className="relative group text-[#1F1F1F] hover:text-[#8B004A] font-sans text-[15px] sm:text-[16px] font-normal transition-colors duration-300">
                <span>Recipes</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#contact" className="relative group text-[#1F1F1F] hover:text-[#8B004A] font-sans text-[15px] sm:text-[16px] font-normal transition-colors duration-300">
                <span>Contact</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-sans text-[13px] tracking-[0.18em] uppercase text-[#8B004A] font-semibold mb-3 md:mb-4">
              COMPANY
            </h4>
            <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-2.5">
              <a href="#about" className="relative group text-[#1F1F1F] hover:text-[#8B004A] font-sans text-[15px] sm:text-[16px] font-normal transition-colors duration-300">
                <span>About</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#heritage" className="relative group text-[#1F1F1F] hover:text-[#8B004A] font-sans text-[15px] sm:text-[16px] font-normal transition-colors duration-300">
                <span>Heritage</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#quality" className="relative group text-[#1F1F1F] hover:text-[#8B004A] font-sans text-[15px] sm:text-[16px] font-normal transition-colors duration-300">
                <span>Quality</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Column 3: CONTACT */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-sans text-[13px] tracking-[0.18em] uppercase text-[#8B004A] font-semibold mb-3 md:mb-4">
              CONTACT
            </h4>
            <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-2.5 font-sans text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] text-[#1F1F1F]">
              <a
                href="mailto:sales@pascofoods.com"
                className="relative group hover:text-[#8B004A] transition-colors duration-300 break-all sm:break-normal"
              >
                <span>sales@pascofoods.com</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="tel:+441942493220"
                className="relative group hover:text-[#8B004A] transition-colors duration-300 whitespace-nowrap"
              >
                <span>+44 1942 493220</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#8B004A] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Column 4: ADDRESS */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-sans text-[13px] tracking-[0.18em] uppercase text-[#8B004A] font-semibold mb-3 md:mb-4">
              ADDRESS
            </h4>
            <div className="font-sans text-[13px] sm:text-[15px] text-[#6B6762] leading-relaxed font-normal flex flex-col items-center md:items-start text-center md:text-left">
              <p className="font-medium text-[#1F1F1F]">Pasco Foods Ltd</p>
              <p>Makerfield Way</p>
              <p>Ince-in-Makerfield</p>
              <p>Wigan WN2 2PR</p>
            </div>
          </div>

        </div>

        {/* DIVIDER 3 */}
        <div className="w-full border-t border-black/[0.06] mb-10" />

        {/* 4. BRAND TAGLINE, COPYRIGHT & LEGAL LINKS */}
        <div className="flex flex-col items-center gap-2 font-sans text-xs text-[#6B6762]">
          <p className="font-serif italic text-[17px] text-[#8B004A] font-medium mb-1">
            Authentic Indian flavours, crafted with care since 1990.
          </p>

          <p>© {new Date().getFullYear()} Pasco Foods Ltd. All rights reserved.</p>

          <div className="flex items-center gap-4 mt-1 text-[#6B6762]">
            <a href="#privacy" className="hover:text-[#8B004A] transition-colors">
              Privacy Policy
            </a>
            <span>&bull;</span>
            <a href="#terms" className="hover:text-[#8B004A] transition-colors">
              Terms of Service
            </a>
            <span>&bull;</span>
            <a href="#cookies" className="hover:text-[#8B004A] transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
