import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EmbroideryMandala from "./EmbroideryMandala";

export default function Hero() {
  const [startRotation, setStartRotation] = useState(false);

  useEffect(() => {
    // 1. Embroidery mandala fades in first (0.0s - 0.6s)
    // 2. Jars appear with faster initial entrance speed from center (0.6s - 1.7s)
    // 3. Only after the jars settle (1.8s) does ultra-slow rotation begin!
    const timer = setTimeout(() => {
      setStartRotation(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative min-h-fit md:min-h-screen flex flex-col justify-between pt-24 pb-[40px] lg:pt-28 lg:pb-16 bg-[#F2EFE7] overflow-hidden select-none">
      {/* 1. Subtle Line-Art Botanical Drawings & Decorative Embroidery Background Motif */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        {/* Left Botanical Floral Line Art (Mobile: Lower-Left Edge | Desktop: top-1/4 -left-12) */}
        <svg
          className="absolute top-[63%] -left-20 w-[210px] sm:w-[280px] md:top-1/4 md:-left-12 md:w-[460px] h-auto text-[#666157]"
          viewBox="0 0 400 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M50 450 Q 120 300 220 180 T 350 40" strokeDasharray="3,3" />
          <path d="M 220 180 C 180 140, 160 80, 210 60 C 260 40, 280 100, 220 180 Z" opacity="0.7" />
          <path d="M 220 180 C 260 140, 320 160, 300 210 C 280 260, 220 240, 220 180 Z" opacity="0.7" />
          <path d="M 120 300 C 80 280, 60 220, 110 200 C 160 180, 170 240, 120 300 Z" opacity="0.6" />
        </svg>

        {/* Right Botanical Floral Line Art (Mobile: Upper-Right Above Jars | Desktop: top-1/3 -right-16) */}
        <svg
          className="absolute top-12 -right-10 w-[240px] sm:w-[300px] md:top-1/3 md:-right-16 md:w-[480px] h-auto text-[#666157]"
          viewBox="0 0 400 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M 350 450 Q 280 320 180 200 T 50 50" strokeDasharray="3,3" />
          <path d="M 180 200 C 220 160, 240 100, 190 80 C 140 60, 120 120, 180 200 Z" opacity="0.7" />
          <path d="M 180 200 C 140 160, 80 180, 100 230 C 120 280, 180 260, 180 200 Z" opacity="0.7" />
        </svg>
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="max-w-[1720px] mx-auto px-6 md:px-10 w-full my-4 md:my-auto z-10 flex flex-col justify-center md:min-h-[75vh]">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-0">
          
          {/* LEFT OVERLAY TEXT */}
          <motion.div
            className="w-full lg:w-[15%] shrink-0 z-20 flex flex-col justify-center text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-serif font-extralight text-[#2B2927] leading-[1.12] tracking-tight">
              Authentic Indian <br />
              <span className="font-serif italic font-normal text-[#7A1C38]">sauces &amp; pastes</span>
            </h1>
          </motion.div>

          {/* CENTER PRODUCT IMAGE WITH EMBROIDERY MANDALA & DIAGONAL FLORAL MOTIFS */}
          <motion.div
            className="w-full lg:w-[70%] relative flex flex-col items-center justify-center my-8 sm:my-12 lg:my-0 z-10 shrink-0 mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative w-full max-w-[1150px] mx-auto flex flex-col items-center justify-center">
              
              {/* Golden Embroidery Mandala Artwork Backdrop */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 transform scale-110 sm:scale-110 lg:scale-125 opacity-[0.12] transition-transform duration-700">
                <EmbroideryMandala
                    size={480}
                    showBadge={false}
                />
              </div>

              {/* Upper-Left Floral Accent (Framing Jars Top-Left) */}
              <svg
                className="absolute -top-6 -left-2 sm:-top-10 sm:-left-6 w-[140px] sm:w-[200px] lg:w-[250px] h-auto text-[#666157] opacity-35 pointer-events-none z-0 transform -rotate-12"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M 40 160 Q 90 100 160 40" strokeDasharray="3,3" />
                <path d="M 90 100 C 60 70, 50 30, 85 20 C 120 10, 130 50, 90 100 Z" opacity="0.85" />
                <path d="M 90 100 C 120 70, 160 85, 145 120 C 130 155, 90 135, 90 100 Z" opacity="0.85" />
              </svg>

              {/* Lower-Right Floral Accent (Framing Jars Bottom-Right) */}
              <svg
                className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-6 w-[140px] sm:w-[200px] lg:w-[250px] h-auto text-[#666157] opacity-35 pointer-events-none z-0 transform rotate-[-165deg] scale-x-[-1]"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M 40 160 Q 90 100 160 40" strokeDasharray="3,3" />
                <path d="M 90 100 C 60 70, 50 30, 85 20 C 120 10, 130 50, 90 100 Z" opacity="0.85" />
                <path d="M 90 100 C 120 70, 160 85, 145 120 C 130 155, 90 135, 90 100 Z" opacity="0.85" />
              </svg>

              {/* Whole Jars Lineup Image (Primary Focal Point - Larger on Mobile) */}
              <div className="relative z-10 w-full flex flex-col items-center justify-center translate-y-1 md:translate-y-[50px]">
                <motion.img
                  src="/pasco-hero.webp"
                  alt="Pasco Authentic Indian Marinade and Curry Pastes Range"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] filter contrast-[1.02] saturate-[1.02] transform transition-transform duration-500 hover:scale-[1.02] mx-auto origin-center scale-[1.08] sm:scale-100"
                  width={1150}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.6,
                    ease: "easeOut",
                  }}
                />

                {/* Ground Shadow */}
                <motion.div
                  className="w-4/5 h-8 bg-black/15 mx-auto rounded-full blur-2xl -mt-6 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </div>

            </div>
          </motion.div>

          {/* RIGHT OVERLAY TEXT & CTA */}
          <motion.div
            className="w-full lg:w-[15%] shrink-0 z-20 flex flex-col justify-center items-start lg:items-start text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xs sm:text-sm text-[#524E48] font-light leading-relaxed mb-6 max-w-[200px]">
              Bringing authentic Indian flavours to Britain since 1994.
            </p>

            <a
              href="#products"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#2B2927] uppercase border-b-2 border-[#2B2927] pb-1 hover:text-[#7A1C38] hover:border-[#7A1C38] hover:translate-x-[8px] transition-all duration-300 group whitespace-nowrap"
            >
              <span>SHOP COLLECTION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[8px]" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom Subtle Tagline */}
      <div className="text-center z-10 opacity-40 text-xs font-light tracking-widest text-[#524E48] uppercase mt-3 md:mt-8">
        PASCO FOODS — EST. 1994
      </div>
    </section>
  );
}

