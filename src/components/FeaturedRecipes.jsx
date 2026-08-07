import { LazyMotion, domAnimation, m } from "framer-motion";
import { Clock, BarChart2 } from "lucide-react";

const featuredRecipe = {
  id: "hyderabadi-biryani",
  title: "Hyderabadi Dum Biryani with Fragrant Saffron & Spices",
  image: "/recipe-Hydrabadi-Biryani.jpg",
  alt: "Hyderabadi Dum Biryani Recipe",
  time: "45 MINS",
  difficulty: "MEDIUM",
  tag: "FEATURED RECIPE",
  description: "Fragrant basmati rice layered with tender marinated meat, saffron, and whole caramelized spices.",
};

const supportingRecipes = [
  {
    id: "methi-chicken",
    title: "Methi Chicken Curry with Fresh Fenugreek",
    image: "/recipe-Methi-Chicken.jpg",
    alt: "Methi Chicken Curry Recipe",
    time: "30 MINS",
    difficulty: "EASY",
    description: "Succulent chicken simmered with fresh fenugreek leaves and aromatic Pasco curry spices.",
  },
  {
    id: "stuffed-mushrooms",
    title: "Spiced Stuffed Mushrooms with Herbs",
    image: "/recipe-Stuffed-Mushrooms.jpg",
    alt: "Spiced Stuffed Mushrooms Recipe",
    time: "20 MINS",
    difficulty: "EASY",
    description: "Roasted button mushrooms stuffed with spiced paneer, fresh herbs, and Pasco marinade.",
  },
  {
    id: "lamb-bhuna-gosht",
    title: "Slow-Cooked Lamb Bhuna Gosht",
    image: "/thumb-Lamb-Bhuna-Gosht.jpg",
    alt: "Lamb Bhuna Gosht Recipe",
    time: "40 MINS",
    difficulty: "MEDIUM",
    description: "Tender slow-cooked lamb in a rich, velvety tomato and caramelized onion spice reduction.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function FeaturedRecipes() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="recipes" className="relative bg-[#F2EFE8] py-16 md:py-[120px] px-6 md:px-[48px] overflow-hidden select-none">
      
      {/* SECTION HEADER CONTAINER */}
      <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center z-10 mb-[60px] md:mb-[80px]">
        
        {/* Small Label */}
        <m.span
          className="uppercase font-sans text-[14px] tracking-[0.25em] text-[#8B004A] font-semibold mb-[20px] block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          FEATURED RECIPES
        </m.span>

        {/* Main Heading */}
        <m.h2
          className="font-serif text-4xl sm:text-5xl md:text-[60px] font-semibold text-[#1F1F1F] leading-[1.1] mb-[24px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cook Something Delicious
        </m.h2>

        {/* Subtitle */}
        <m.p
          className="font-sans text-base sm:text-[18px] text-[#6B6762] max-w-[620px] mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover authentic Indian culinary recipes crafted with Pasco products.
        </m.p>
      </div>

      {/* EDITORIAL RECIPE GRID */}
      <div className="max-w-[1440px] mx-auto z-10 relative">
        <m.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-[32px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* 1. CINEMATIC FEATURED RECIPE PANEL (Left Side — 60% Width / 3 Columns) */}
          <m.div
            variants={cardVariants}
            className="group lg:col-span-3"
          >
            <a
              href={`#recipe-${featuredRecipe.id}`}
              className="block relative rounded-[24px] overflow-hidden lg:h-[660px] h-[480px] border border-[#E6DED2] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-[6px] group-hover:border-[#8B004A] group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.25)] cursor-pointer"
            >
              {/* Full-Bleed Background Image */}
              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.alt}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                width={800}
                height={660}
                loading="lazy"
                decoding="async"
              />

              {/* Dark Gradient Overlay for Pristine Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Top Glassmorphism Meta Tags */}
              <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md text-white text-[11px] font-sans font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-[#E6DED2]" />
                  {featuredRecipe.time}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md text-white text-[11px] font-sans font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border border-white/20">
                  <BarChart2 className="w-3.5 h-3.5 text-[#E6DED2]" />
                  {featuredRecipe.difficulty}
                </span>
              </div>

              {/* Bottom Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-[48px] z-20 flex flex-col items-start text-left">
                <span className="text-[#E6DED2] text-[12px] font-sans font-bold tracking-[0.2em] uppercase mb-2">
                  {featuredRecipe.tag}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white leading-tight mb-3 group-hover:text-[#F2EFE8] transition-colors duration-300">
                  {featuredRecipe.title}
                </h3>

                <p className="font-sans text-[15px] sm:text-[16px] text-white/80 leading-relaxed mb-5 max-w-[560px]">
                  {featuredRecipe.description}
                </p>

                <div className="inline-flex items-center text-white text-sm font-semibold tracking-wide group-hover:text-[#F2EFE8]">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-white group-hover:after:bg-[#8B004A] after:transition-all after:duration-300">
                    View Recipe
                  </span>
                  <span className="inline-block ml-1.5 transition-transform duration-300 ease-out group-hover:translate-x-[6px]">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </m.div>

          {/* 2. SUPPORTING RECIPE CARDS (Right Side — 40% Width / 2 Columns Stacked) */}
          <div className="lg:col-span-2 flex flex-col gap-[20px]">
            {supportingRecipes.map((recipe) => (
              <m.div key={recipe.id} variants={cardVariants} className="group flex-1">
                <a
                  href={`#recipe-${recipe.id}`}
                  className="block relative rounded-[24px] overflow-hidden lg:h-[200px] h-[280px] border border-[#E6DED2] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-[4px] group-hover:border-[#8B004A] group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)] cursor-pointer"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.alt}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                    width={500}
                    height={280}
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-sans font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-white/20">
                      <Clock className="w-3 h-3 text-[#E6DED2]" />
                      {recipe.time}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 z-20 flex flex-col items-start text-left">
                    <h3 className="font-serif text-xl lg:text-[22px] font-semibold text-white leading-tight mb-2 group-hover:text-[#F2EFE8] transition-colors duration-300">
                      {recipe.title}
                    </h3>

                    <div className="inline-flex items-center text-white text-xs font-semibold tracking-wide">
                      <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-white group-hover:after:bg-[#8B004A] after:transition-all after:duration-300">
                        View Recipe
                      </span>
                      <span className="inline-block ml-1.5 transition-transform duration-300 ease-out group-hover:translate-x-[6px]">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              </m.div>
            ))}
          </div>

        </m.div>
      </div>

    </section>
  </LazyMotion>
  );
}
