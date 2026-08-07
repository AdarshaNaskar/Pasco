import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EmbroideryMandala from "./EmbroideryMandala";

// Import story assets
import heritageCookingImg from "../assets/heritage-cooking.webp";
import bundlesImg from "../assets/bundles.webp";

const stories = [
  {
    id: 1,
    year: "1990 - 1995",
    subtitle: "From Kitchen Origins to Honest Flavours",
    title: "Our Kitchen Beginning & Retail Mission",
    image: heritageCookingImg,
    text: "Our business began in our kitchen in 1990 with four curry pastes that we supplied to our local curry house. Before we knew it word spread and we were supplying curry pastes up and down the country.\n\nIn 1995, we decided to create a retail range so everyone could enjoy the joys of authentic indian food and cooking in their own homes - trouble was everything on the market was mass produced and contained saturated fats, E numbers, additives, preservatives, thick starches and far too much water. From that day we made it our mission to create natural, honest flavours."
  },
  {
    id: 2,
    year: "2000 & Beyond",
    subtitle: "100% Natural Sauces & Spice Plantations",
    title: "Pioneering Natural Sauces & India Spice Farms",
    image: bundlesImg,
    text: "Five years later and after a lot of curry making we created a 100% natural cooking sauce that was free from additives, preservatives, and was gluten free and authentic!\n\nBut that was not enough for us, we then decided to grow our own spices on our own farm plantations in India and work in partnership with farmers to allow us to be in control of the best spices and herbs from day one."
  }
];

export default function CraftedWithHeritage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentStory = stories[activeIndex];

  // Typewriter effect sequence
  useEffect(() => {
    // 1. Reset state on story index change
    setTypedText("");
    setIsTyping(false);
    setIsComplete(false);

    // 2. Delay typewriter until title animation finishes (400ms)
    const startDelay = setTimeout(() => {
      setIsTyping(true);
    }, 400);

    return () => clearTimeout(startDelay);
  }, [activeIndex]);

  useEffect(() => {
    if (!isTyping) return;

    let index = 0;
    const fullText = currentStory.text;

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 25); // 25ms per character speed

    return () => clearInterval(timer);
  }, [isTyping, activeIndex, currentStory.text]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative bg-white py-16 md:py-[140px] px-6 md:px-[48px] overflow-hidden select-none">
      
      {/* 1. SECTION HEADER */}
      <div className="max-w-[1600px] mx-auto text-center flex flex-col items-center z-10 mb-12 lg:mb-16">
        <m.span
          className="uppercase font-sans text-[13px] tracking-[0.25em] text-[#8B004A] font-semibold mb-3 block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          OUR HERITAGE
        </m.span>

        <m.h2
          className="font-serif text-[34px] md:text-[42px] lg:text-[60px] font-semibold text-[#1F1F1F] leading-[1.1] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Crafted Through Generations
        </m.h2>

        <m.p
          className="font-sans text-base md:text-lg text-[#6B6762] max-w-[640px] leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Preserving the soul of traditional Indian culinary artistry for over three decades.
        </m.p>
      </div>

      {/* 2. MAIN STORY CONTENT CONTAINER (Desktop 58% Left Image / 42% Right Content) */}
      <div className="max-w-[1600px] mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: IMAGE DISPLAY WITH BACKDROP MANDALA (58%) */}
          <div className="w-full lg:w-[58%] relative shrink-0">
            
            {/* Background Embroidery Mandala (3% Opacity, Static) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03] scale-125">
              <EmbroideryMandala size={560} showBadge={false} />
            </div>

            {/* Apple-Style Zoom & Fade Image Container */}
            <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[650px] rounded-[32px] overflow-hidden border border-[#E6DED2] shadow-sm bg-[#F8F6F0] z-10">
              <AnimatePresence mode="wait">
                <m.img
                  key={currentStory.id}
                  src={currentStory.image}
                  alt={currentStory.title}
                  className="w-full h-full object-cover origin-center"
                  width={800}
                  height={650}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: STORY TEXT & TYPEWRITER (42%) */}
          <div className="w-full lg:w-[42%] flex flex-col justify-between min-h-[420px] lg:min-h-[500px] z-10 px-2 lg:px-4">
            <div>
              {/* SUBTITLE & YEAR (Appears immediately) */}
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block bg-[#F2EFE8] text-[#8B004A] text-[12px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#E6DED2]">
                  {currentStory.year}
                </span>
                <span className="font-serif italic text-lg lg:text-xl text-[#8B004A] font-normal">
                  {currentStory.subtitle}
                </span>
              </div>

              {/* STORY TITLE (Fades + Slides 15px up) */}
              <div className="h-[90px] md:h-[105px] flex items-center mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <m.h3
                    key={currentStory.id}
                    className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1F1F1F] leading-[1.18]"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {currentStory.title}
                  </m.h3>
                </AnimatePresence>
              </div>

              {/* TYPEWRITER STORY PARAGRAPH */}
              <div className="min-h-[160px] lg:min-h-[180px]">
                <p className="font-sans text-base sm:text-lg text-[#4A4744] font-normal leading-[1.7] tracking-tight whitespace-pre-line">
                  {typedText}
                  <span
                    className={`inline-block ml-1 font-bold text-[#8B004A] ${
                      isComplete ? "animate-pulse opacity-100" : "opacity-75"
                    }`}
                  >
                    |
                  </span>
                </p>
              </div>
            </div>

            {/* ELEGANT EDITORIAL NAVIGATION (Bottom Left / Mobile Centered) */}
            <div className="pt-8 border-t border-[#E6DED2] flex items-center justify-between mt-auto">
              <button
                onClick={handlePrev}
                className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#2B2927] hover:text-[#8B004A] transition-colors duration-300 cursor-pointer select-none"
                aria-label="Previous Story"
              >
                <ChevronLeft className="w-4 h-4 text-[#8B004A] transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Previous</span>
              </button>

              {/* Story Counter */}
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#6B6762] uppercase">
                {activeIndex + 1} / {stories.length}
              </span>

              <button
                onClick={handleNext}
                className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#2B2927] hover:text-[#8B004A] transition-colors duration-300 cursor-pointer select-none"
                aria-label="Next Story"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-[#8B004A] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  </LazyMotion>
  );
}
