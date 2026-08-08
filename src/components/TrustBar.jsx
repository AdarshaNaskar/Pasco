import { LazyMotion, domAnimation, m } from "framer-motion";
import { Truck, ShoppingBag, Mail } from "lucide-react";
import EmbroideryMandala from "./EmbroideryMandala";

const trustItems = [
  {
    id: "fast-delivery",
    icon: Truck,
    heading: "Fast UK Delivery",
    subtext: "3–5 working days",
  },
  {
    id: "free-delivery",
    icon: ShoppingBag,
    heading: "Free Delivery",
    subtext: "Orders over £15",
  },
  {
    id: "exclusive-offers",
    icon: Mail,
    heading: "Exclusive Offers",
    subtext: "Recipes, new launches & special promotions",
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

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function TrustBar() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="trust" className="relative bg-[#FFFFFF] py-8 md:py-12 px-6 md:px-[48px] overflow-hidden select-none scroll-mt-20">
        <div id="quality" className="absolute -top-20 left-0" />
        <div className="max-w-[1440px] mx-auto z-10 relative">
          <m.div
            className="relative bg-[#8B004A] rounded-[24px] py-10 px-8 md:px-12 shadow-xl shadow-[#8B004A]/10 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
          {/* Subtle Background Embroidery Mandala Accent (6% Opacity) */}
          <div className="absolute -top-24 -right-20 pointer-events-none z-0 opacity-[0.06] scale-125 md:scale-150">
            <EmbroideryMandala
              size={480}
              showBadge={false}
            />
          </div>

          {/* Responsive 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10">
            {trustItems.map((item, index) => {
              const IconComponent = item.icon;
              const isLast = index === trustItems.length - 1;

              return (
                <m.div
                  key={item.id}
                  variants={itemVariants}
                  className={`group flex items-start sm:items-center gap-5 px-2 md:px-6 ${
                    !isLast ? "md:border-r md:border-white/12" : ""
                  }`}
                >
                  {/* Icon Wrapper */}
                  <div className="shrink-0 p-3 rounded-2xl bg-white/10 text-white group-hover:text-[#D4AF37] group-hover:bg-white/15 transform group-hover:scale-105 transition-all duration-300 shadow-2xs">
                    <IconComponent className="w-7 h-7 stroke-[1.5] transition-colors duration-300" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col text-left">
                    <h3 className="font-sans text-[20px] font-semibold text-white leading-snug group-hover:text-white/95 transition-colors">
                      {item.heading}
                    </h3>
                    <p className="font-sans text-[15px] text-white/80 mt-1 leading-normal font-normal">
                      {item.subtext}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  </LazyMotion>
  );
}
