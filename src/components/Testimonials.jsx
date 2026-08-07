import React, { useState, useRef, useEffect } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Star } from "lucide-react";

const googleReviews = [
  {
    id: "mrs-shinde",
    review: `"I have tried Pasco's mango chutney, chilli garlic pickle and hot curry paste. Very authentic Indian taste. Hot curry paste is my favourite now, it gives amazing taste to my curries whether it's Veg or Non veg. Love these products."`,
    author: "MRS. SHINDE",
    source: "google.com review",
  },
  {
    id: "kirti-paik",
    review: `"We have tried the pickles and the spices they are very tasty. Just like Indian home taste. Really awesome!! Thank you Pasco Foods!"`,
    author: "KIRTI PAIK",
    source: "google.com review",
  },
  {
    id: "swapnil-khandekar",
    review: `"Delicious taste, authentic Indian flavours! I recommend everyone to try Pasco pickles and curry pastes"`,
    author: "SWAPNIL KHANDEKAR",
    source: "google.com review",
  },
  {
    id: "mrityunjay-mrinal",
    review: `"I bought mix pickle, lime pickle and sweet mango. The taste of the products are amazing. I wish I could have bought in big Jars."`,
    author: "MRITYUNJAY MRINAL",
    source: "google.com review",
  },
  {
    id: "vandana-aparanti",
    review: `"I tried the curry paste and also mixed pickle. Both taste delicious and authentic."`,
    author: "VANDANA APARANTI",
    source: "google.com review",
  },
  {
    id: "piyush-chauhan",
    review: `"I tried Pasco's products and believe me you will find authentic Indian taste, simply loved it."`,
    author: "PIYUSH CHAUHAN",
    source: "google.com review",
  },
  {
    id: "abhi-kaninde",
    review: `"Very authentic and superb Spices. Now on, I will always have all the Pasco spices in my kitchen."`,
    author: "ABHI KANINDE",
    source: "google.com review",
  },
];

// Duplicate the array for a seamless infinite loop
const marqueeReviews = [...googleReviews, ...googleReviews];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = useRef(null);

  const handleMouseEnter = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative bg-[#F2EFE8] py-16 md:py-[120px] overflow-hidden select-none">
      
      {/* Inline Keyframes for 100% Native CSS Marquee (Native animation-play-state pause control) */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          animation: marqueeScroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
      
      {/* SECTION HEADER CONTAINER */}
      <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center px-6 md:px-[48px] mb-[60px] z-10">
        
        {/* Small Label */}
        <m.span
          className="uppercase font-sans text-[14px] tracking-[0.25em] text-[#8B004A] font-semibold mb-[20px] block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          WHAT OUR CUSTOMERS SAY
        </m.span>

        {/* Main Heading */}
        <m.h2
          className="font-serif text-4xl sm:text-5xl md:text-[60px] font-semibold text-[#1F1F1F] leading-[1.1] mb-[24px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Loved by Families
        </m.h2>

        {/* Subtitle */}
        <m.p
          className="font-sans text-base sm:text-[18px] text-[#6B6762] max-w-[620px] mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Some of the kind words people have shared about our products.
        </m.p>
      </div>

      {/* INFINITE MARQUEE CAROUSEL CONTAINER */}
      <div
        className="relative w-full overflow-hidden flex items-center py-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        
        {/* Left & Right Subtle Fade Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F2EFE8] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F2EFE8] to-transparent z-20 pointer-events-none" />

        {/* CSS Marquee Track with Instant Native Hover Pause & 2s Delay Resume */}
        <div
          className="flex gap-[28px] shrink-0 marquee-track"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {marqueeReviews.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[360px] sm:w-[420px] shrink-0 bg-white border border-[#E8E2D8] rounded-[24px] p-[32px] flex flex-col justify-between items-start text-left transition-all duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-[6px] hover:border-[#8B004A] hover:shadow-[0_20px_40px_rgba(139,0,74,0.06)] cursor-pointer select-none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 text-[#8B004A]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#8B004A] stroke-none" />
                ))}
              </div>

              {/* Real Customer Quote */}
              <p className="font-serif italic text-[17px] sm:text-[18px] text-[#1F1F1F] leading-relaxed mb-6 font-normal">
                {item.review}
              </p>

              {/* Author & Source Tag */}
              <div className="mt-auto pt-4 border-t border-[#F2EFE8] w-full flex flex-col items-start">
                <span className="font-sans text-[13px] font-bold text-[#1F1F1F] tracking-wide uppercase">
                  &mdash; {item.author}
                </span>
                <span className="font-sans text-[12px] text-[#6B6762] mt-0.5">
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  </LazyMotion>
  );
}
