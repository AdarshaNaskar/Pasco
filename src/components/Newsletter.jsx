import React, { useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import EmbroideryMandala from "./EmbroideryMandala";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
      }, 800);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative bg-[#F2EFE8] py-12 md:py-[80px] px-6 md:px-[48px] overflow-hidden select-none">
        <div className="max-w-[1440px] mx-auto z-10 relative">
          <m.div
            className="relative bg-[#8B004A] rounded-[40px] py-[80px] md:py-[110px] px-8 md:px-[64px] text-center flex flex-col items-center justify-center overflow-hidden shadow-xl border border-[#7A0041]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
          {/* Decorative Mandala Hanging Partially Outside Top-Right Edge */}
          <div className="absolute -top-28 -right-20 pointer-events-none z-0 opacity-[0.12] scale-125 md:scale-150">
            <EmbroideryMandala
              size={520}
              showBadge={false}
            />
          </div>

          {/* 1. Sequential Heading (Join the Pasco Kitchen) */}
          <m.h2
            className="font-serif text-4xl sm:text-5xl md:text-[60px] font-semibold text-white leading-[1.1] mb-[20px] z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Join the Pasco Kitchen
          </m.h2>

          {/* 2. Sequential Subtitle (Three Short Editorial Lines) */}
          <m.div
            className="font-sans text-base sm:text-[18px] text-[#F2EFE8] max-w-[540px] mx-auto mb-[48px] z-10 leading-relaxed font-normal opacity-90 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            <span>Authentic recipes.</span>
            <span>Exclusive launches.</span>
            <span>Thoughtfully delivered.</span>
          </m.div>

          {/* Form / Success Transition Container */}
          <div className="w-full max-w-[480px] z-10 relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                /* Elegant Success Block */
                <m.div
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="bg-white/8 border border-white/15 rounded-[28px] p-8 flex flex-col items-center text-center text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white text-[#8B004A] flex items-center justify-center mb-4 shadow-md">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
                    Welcome to the Pasco Kitchen
                  </h3>
                  <p className="font-sans text-sm md:text-base text-[#F2EFE8] opacity-90 leading-relaxed max-w-[360px]">
                    You’ll be the first to receive recipes, new launches and exclusive offers.
                  </p>
                </m.div>
              ) : (
                /* Stacked Form Layout */
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                  {/* 3. Sequential Input (No backdrop blur, bg-white/8 border-white/15) */}
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className="bg-white/8 border border-white/15 text-white placeholder-white/60 text-center px-8 py-4 outline-none font-sans text-base w-full rounded-full transition-colors focus:border-white/40 focus:bg-white/12"
                    />
                  </m.div>

                  {/* 4. Sequential Button (Subscribe → with hover #F2EFE8 and arrow slide) */}
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full"
                  >
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group w-full bg-white text-[#8B004A] hover:bg-[#F2EFE8] font-sans font-semibold text-base rounded-full py-4 px-8 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-[#8B004A]" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-[6px]" />
                        </>
                      )}
                    </button>
                  </m.div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </m.div>
      </div>
    </section>
  </LazyMotion>
  );
}
