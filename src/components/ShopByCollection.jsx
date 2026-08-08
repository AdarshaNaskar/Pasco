import { LazyMotion, domAnimation, m } from "framer-motion";
import EmbroideryMandala from "./EmbroideryMandala";

// Import images directly from src/assets folder
import curryPastesImg from "../assets/curry-pastes.webp";
import cookingSaucesImg from "../assets/cooking-sauces.webp"; 
import marinadesImg from "../assets/marinades.webp";
import chutneysImg from "../assets/chutneys.webp";
import picklesImg from "../assets/pickles.webp";
import bundlesImg from "../assets/bundles.webp";

export default function ShopByCollection() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="collections" className="relative bg-[#F2EFE8] pt-[60px] pb-16 md:py-[120px] px-6 md:px-[48px] overflow-hidden scroll-mt-20">
      <div id="products" className="absolute -top-20 left-0" />
      
      {/* SECTION HEADER CONTAINER */}
      <div className="relative max-w-[1440px] mx-auto text-center flex flex-col items-center z-10">
        
        {/* BACKGROUND EMBROIDERED MANDALA DETAIL (3% Opacity behind heading) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] pointer-events-none z-0 opacity-[0.03] scale-125 sm:scale-150 md:scale-[1.8]">
          <EmbroideryMandala
            size={480}
            showBadge={false}
          />
        </div>

        {/* Small Label */}
        <m.span
          className="uppercase font-sans text-[14px] tracking-[0.25em] text-[#8B004A] font-semibold mb-[20px] z-10 block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          OUR COLLECTIONS
        </m.span>

        {/* Main Heading */}
        <m.h2
          className="font-serif text-4xl sm:text-5xl md:text-[60px] font-semibold text-[#1F1F1F] leading-[1.1] mb-[24px] z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Shop by Collection
        </m.h2>

        {/* Subtitle */}
        <m.p
          className="font-sans text-base sm:text-[18px] text-[#6B6762] max-w-[620px] mx-auto mb-[80px] z-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover authentic flavours crafted for every kitchen.
        </m.p>
      </div>

      {/* EDITORIAL ASYMMETRICAL COLLECTION GRID */}
      <div className="max-w-[1440px] mx-auto z-10 relative">
        <m.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.25, 1, 0.5, 1],
          }}
        >

          {/* 1. CURRY PASTES — FEATURE CARD (Spans 2 cols x 2 rows on desktop) */}
          <div
            className="group lg:col-span-2 lg:row-span-2 md:col-span-2 h-full"
          >
            <a
              href="#curry-pastes"
              className="block bg-white border border-[#E6DED2] rounded-[28px] h-full min-h-[420px] lg:min-h-[615px] p-6 lg:p-10 flex flex-col justify-between items-center text-center transition-all duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 group-hover:scale-[1.015] group-hover:border-[#8B004A] group-hover:shadow-xl cursor-pointer overflow-hidden select-none relative"
            >
              {/* Feature Badge */}
              <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20">
                <span className="inline-block bg-[#F2EFE8] text-[#8B004A] text-[11px] font-sans font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border border-[#E6DED2]">
                  FEATURED COLLECTION
                </span>
              </div>

              {/* Large Product Image Container */}
              <div className="w-full flex-1 flex items-center justify-center relative overflow-hidden pt-12 pb-2 px-4">
                <img
                  src={curryPastesImg}
                  alt="Pasco Curry Pastes Signature Collection"
                  width={414}
                  height={414}
                  className="max-h-[340px] lg:max-h-[414px] w-auto object-contain transform scale-[1.44] lg:scale-[1.51]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Bottom Content Info */}
              <div className="w-full flex flex-col items-center justify-end shrink-0 pt-2 z-10">
                <h3 className="font-serif text-[32px] lg:text-[40px] font-semibold text-[#1F1F1F] leading-tight mb-2 group-hover:text-[#8B004A] transition-colors duration-300">
                  Pickles
                </h3>

                <p className="font-sans text-[16px] lg:text-[17px] text-[#6B6762] leading-relaxed line-clamp-2 mb-4 max-w-[500px]">
                  Traditional sun-cured pickles packed with fiery, punchy spices.
                </p>

                <div className="inline-flex items-center text-[#8B004A] text-sm font-semibold tracking-wide relative">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#8B004A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Explore
                  </span>
                  <span className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-[8px]">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 2. MARINADES */}
          <div
            className="group lg:col-span-1 md:col-span-1"
          >
            <a
              href="#marinades"
              className="block bg-white border border-[#E6DED2] rounded-[28px] h-[340px] p-[24px] flex flex-col justify-between items-center text-center transition-all duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 group-hover:scale-[1.015] group-hover:border-[#8B004A] group-hover:shadow-lg cursor-pointer overflow-hidden select-none"
            >
              <div className="w-full h-[62%] flex items-center justify-center relative overflow-hidden p-2">
                <img
                  src={marinadesImg}
                  alt="Pasco Marinades Collection"
                  width={320}
                  height={320}
                  className="max-h-full max-w-full object-contain transform scale-[1.70]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-end flex-grow pt-2 z-10">
                <h3 className="font-serif text-[28px] font-semibold text-[#1F1F1F] leading-tight mb-2 group-hover:text-[#8B004A] transition-colors duration-300">
                  Marinades
                </h3>

                <p className="font-sans text-[16px] text-[#6B6762] leading-snug line-clamp-2 mb-4 max-w-[280px]">
                  Rich spice blends engineered to tenderize and infuse bold flavour.
                </p>

                <div className="inline-flex items-center text-[#8B004A] text-sm font-semibold tracking-wide relative">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#8B004A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Explore
                  </span>
                  <span className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-[8px]">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 3. COOKING SAUCES */}
          <div
            className="group lg:col-span-1 md:col-span-1"
          >
            <a
              href="#cooking-sauces"
              className="block bg-white border border-[#E6DED2] rounded-[28px] h-[340px] p-[24px] flex flex-col justify-between items-center text-center transition-all duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 group-hover:scale-[1.015] group-hover:border-[#8B004A] group-hover:shadow-lg cursor-pointer overflow-hidden select-none"
            >
              <div className="w-full h-[62%] flex items-center justify-center relative overflow-hidden p-2">
                <img
                  src={marinadesImg}
                  alt="Pasco Marinades Collection"
                  width={320}
                  height={320}
                  className="max-h-full max-w-full object-contain transform scale-[1.70]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-end flex-grow pt-2 z-10">
                <h3 className="font-serif text-[28px] font-semibold text-[#1F1F1F] leading-tight mb-2 group-hover:text-[#8B004A] transition-colors duration-300">
                  Cooking Sauces
                </h3>

                <p className="font-sans text-[16px] text-[#6B6762] leading-snug line-clamp-2 mb-4 max-w-[280px]">
                  Simmer-ready authentic sauces for quick, restaurant-quality meals.
                </p>

                <div className="inline-flex items-center text-[#8B004A] text-sm font-semibold tracking-wide relative">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#8B004A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Explore
                  </span>
                  <span className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-[8px]">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 4. CHUTNEYS */}
          <div
            className="group lg:col-span-1 md:col-span-1"
          >
            <a
              href="#chutneys"
              className="block bg-white border border-[#E6DED2] rounded-[28px] h-[340px] p-[24px] flex flex-col justify-between items-center text-center transition-all duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 group-hover:scale-[1.015] group-hover:border-[#8B004A] group-hover:shadow-lg cursor-pointer overflow-hidden select-none"
            >
              <div className="w-full h-[62%] flex items-center justify-center relative overflow-hidden p-2">
                <img
                  src={chutneysImg}
                  alt="Pasco Chutneys Collection"
                  width={320}
                  height={320}
                  className="max-h-full max-w-full object-contain transform scale-[1.70]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-end flex-grow pt-2 z-10">
                <h3 className="font-serif text-[28px] font-semibold text-[#1F1F1F] leading-tight mb-2 group-hover:text-[#8B004A] transition-colors duration-300">
                  Chutneys
                </h3>

                <p className="font-sans text-[16px] text-[#6B6762] leading-snug line-clamp-2 mb-4 max-w-[280px]">
                  Sweet, tangy &amp; savory preserves to elevate every dish.
                </p>

                <div className="inline-flex items-center text-[#8B004A] text-sm font-semibold tracking-wide relative">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#8B004A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Explore
                  </span>
                  <span className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-[8px]">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 5. Curry Pastes */}
          <div
            className="group lg:col-span-1 md:col-span-1"
          >
            <a
              href="#pickles"
              className="block bg-white border border-[#E6DED2] rounded-[28px] h-[340px] p-[24px] flex flex-col justify-between items-center text-center transition-all duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 group-hover:scale-[1.015] group-hover:border-[#8B004A] group-hover:shadow-lg cursor-pointer overflow-hidden select-none"
            >
              <div className="w-full h-[62%] flex items-center justify-center relative overflow-hidden p-2">
                <img
                  src={picklesImg}
                  alt="Pasco Pickles Collection"
                  width={320}
                  height={320}
                  className="max-h-full max-w-full object-contain transform scale-[1.70]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-end flex-grow pt-2 z-10">
                <h3 className="font-serif text-[28px] font-semibold text-[#1F1F1F] leading-tight mb-2 group-hover:text-[#8B004A] transition-colors duration-300">
                  Curry Pastes
                </h3>

                <p className="font-sans text-[16px] text-[#6B6762] leading-snug line-clamp-2 mb-4 max-w-[280px]">
                  Concentrated aromatic pastes crafted for deep, authentic curries.
                </p>

                <div className="inline-flex items-center text-[#8B004A] text-sm font-semibold tracking-wide relative">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#8B004A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Explore
                  </span>
                  <span className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-[8px]">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 6. BUNDLES */}
          <div
            className="group lg:col-span-1 md:col-span-2 lg:col-auto"
          >
            <a
              href="#bundles"
              className="block bg-white border border-[#E6DED2] rounded-[28px] h-[340px] p-[24px] flex flex-col justify-between items-center text-center transition-all duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 group-hover:scale-[1.015] group-hover:border-[#8B004A] group-hover:shadow-lg cursor-pointer overflow-hidden select-none"
            >
              <div className="w-full h-[62%] flex items-center justify-center relative overflow-hidden p-2">
                <img
                  src={bundlesImg}
                  alt="Pasco Bundles Collection"
                  width={320}
                  height={320}
                  className="max-h-full max-w-full object-contain transform scale-[1.70]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-end flex-grow pt-2 z-10">
                <h3 className="font-serif text-[28px] font-semibold text-[#1F1F1F] leading-tight mb-2 group-hover:text-[#8B004A] transition-colors duration-300">
                  Bundles
                </h3>

                <p className="font-sans text-[16px] text-[#6B6762] leading-snug line-clamp-2 mb-4 max-w-[280px]">
                  Curated collection boxes showcasing our finest culinary creations.
                </p>

                <div className="inline-flex items-center text-[#8B004A] text-sm font-semibold tracking-wide relative">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#8B004A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Explore
                  </span>
                  <span className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-[8px]">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>

        </m.div>
      </div>

    </section>
  </LazyMotion>
  );
}
