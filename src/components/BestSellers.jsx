import { useRef } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Import images directly from src/assets folder
import curryPastesImg from "../assets/curry-pastes.webp";
import cookingSaucesImg from "../assets/cooking-sauces.webp";
import marinadesImg from "../assets/marinades.webp";
import chutneysImg from "../assets/chutneys.webp";
import picklesImg from "../assets/pickles.webp";
import bundlesImg from "../assets/bundles.webp";

const products = [
  {
    id: "tikka-masala",
    name: "Tikka Masala Paste",
    price: "£4.99",
    tag: "BEST SELLER",
    image: curryPastesImg,
    alt: "Pasco Tikka Masala Curry Paste",
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken Sauce",
    price: "£5.49",
    tag: "BEST SELLER",
    image: cookingSaucesImg,
    alt: "Pasco Butter Chicken Cooking Sauce",
  },
  {
    id: "tandoori-marinade",
    name: "Tandoori Grill Marinade",
    price: "£4.79",
    tag: "NEW",
    image: marinadesImg,
    alt: "Pasco Tandoori Grill Marinade",
  },
  {
    id: "mango-chutney",
    name: "Sweet Mango Chutney",
    price: "£3.99",
    tag: "BEST SELLER",
    image: chutneysImg,
    alt: "Pasco Sweet Mango Chutney",
  },
  {
    id: "spicy-lime-pickle",
    name: "Spicy Lime Pickle",
    price: "£4.29",
    tag: "NEW",
    image: picklesImg,
    alt: "Pasco Spicy Lime Pickle",
  },
  {
    id: "trio-gift-bundle",
    name: "Artisanal Trio Bundle",
    price: "£14.99",
    tag: "BEST SELLER",
    image: bundlesImg,
    alt: "Pasco Artisanal Trio Gift Bundle",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function BestSellers() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative bg-white py-16 md:py-[120px] px-6 md:px-[48px] overflow-hidden select-none">
      
      {/* SECTION HEADER CONTAINER */}
      <div className="max-w-[1440px] mx-auto mb-[60px] md:mb-[80px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          {/* Header Text Stack */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[620px] mx-auto md:mx-0">
            <m.span
              className="uppercase font-sans text-[14px] tracking-[0.25em] text-[#8B004A] font-semibold mb-[20px] block"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              BEST SELLERS
            </m.span>

            <m.h2
              className="font-serif text-4xl sm:text-5xl md:text-[60px] font-semibold text-[#1F1F1F] leading-[1.1] mb-[24px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover Our Best Sellers
            </m.h2>

            <m.p
              className="font-sans text-base sm:text-[18px] text-[#6B6762] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover the products our customers keep coming back for.
            </m.p>
          </div>

          {/* CIRCULAR OUTLINE NAVIGATION ARROWS */}
          <div className="hidden md:flex items-center gap-4 shrink-0 self-center md:self-end">
            <button
              onClick={scrollLeft}
              aria-label="Previous products"
              className="w-12 h-12 rounded-full border border-[#E8E2D8] flex items-center justify-center text-[#1F1F1F] hover:bg-[#8B004A] hover:border-[#8B004A] hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next products"
              className="w-12 h-12 rounded-full border border-[#E8E2D8] flex items-center justify-center text-[#1F1F1F] hover:bg-[#8B004A] hover:border-[#8B004A] hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>
      </div>

      {/* PRODUCT CAROUSEL CONTAINER */}
      <div className="max-w-[1440px] mx-auto">
        <m.div
          ref={carouselRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-2 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <m.div
              key={product.id}
              variants={cardVariants}
              className="group flex-none w-[85%] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] snap-start [content-visibility:auto] [contain-intrinsic-size:320px_480px]"
            >
              <a
                href={`#product-${product.id}`}
                className="block bg-white border border-[#E8E2D8] rounded-[24px] h-[480px] p-[28px] flex flex-col justify-between items-center text-center transform-gpu transition-all duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-[6px] group-hover:border-[#8B004A] group-hover:shadow-[0_20px_40px_rgba(139,0,74,0.06)] cursor-pointer relative overflow-hidden select-none"
              >
                {/* Tiny Product Label (Top-Left Pill) */}
                {product.tag && (
                  <div className="absolute top-5 left-5 z-20">
                    <span className="inline-block bg-[#8B004A] text-white text-[10px] font-sans font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Large PNG Product (~72% height, centered) */}
                <div className="w-full h-[72%] flex items-center justify-center relative overflow-hidden pt-4 pb-2">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="max-h-full max-w-full object-contain transform transition-transform duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                    width={320}
                    height={320}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Bottom Content (Name -> Price -> View Product →) */}
                <div className="w-full flex flex-col items-center justify-end flex-grow pt-2 z-10">
                  {/* Product Name */}
                  <h3 className="font-serif text-[24px] font-semibold text-[#1F1F1F] leading-tight mb-1 group-hover:text-[#8B004A] transition-colors duration-300 truncate w-full">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <span className="font-sans text-[16px] font-semibold text-[#6B6762] mb-3 block">
                    {product.price}
                  </span>

                  {/* View Product Link */}
                  <div className="inline-flex items-center text-[#8B004A] text-sm font-semibold tracking-wide relative">
                    <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#8B004A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                      View Product
                    </span>
                    <span className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-[6px]">
                      &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </m.div>
          ))}
        </m.div>

        {/* Mobile Navigation Arrow Controls */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollLeft}
            aria-label="Previous products"
            className="w-11 h-11 rounded-full border border-[#E8E2D8] flex items-center justify-center text-[#1F1F1F] active:bg-[#8B004A] active:text-white transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next products"
            className="w-11 h-11 rounded-full border border-[#E8E2D8] flex items-center justify-center text-[#1F1F1F] active:bg-[#8B004A] active:text-white transition-all duration-300 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  </LazyMotion>
  );
}
