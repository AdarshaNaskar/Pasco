import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy-load sections after Hero for fast initial bundle loading
const ShopByCollection = lazy(() => import("./components/ShopByCollection"));
const BestSellers = lazy(() => import("./components/BestSellers"));
const TrustBar = lazy(() => import("./components/TrustBar"));
const FeaturedRecipes = lazy(() => import("./components/FeaturedRecipes"));
const CraftedWithHeritage = lazy(() => import("./components/CraftedWithHeritage"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Newsletter = lazy(() => import("./components/Newsletter"));
const Footer = lazy(() => import("./components/Footer"));

function DeferredSection({ children, minHeight = "400px", stageEnabled = true }) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (shouldRender || !stageEnabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldRender, stageEnabled]);

  const canMount = stageEnabled && shouldRender;

  return (
    <div ref={containerRef} style={{ minHeight: canMount ? undefined : minHeight }}>
      {canMount ? children : null}
    </div>
  );
}

export default function App() {
  // Progressive loading stage state:
  // Stage 1: Initial Render (Navbar + Hero)
  // Stage 2: ShopByCollection
  // Stage 3: BestSellers
  // Stage 4: TrustBar
  // Stage 5: Remaining Sections
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const runIdle = (fn, timeoutMs) => {
      if ("requestIdleCallback" in window) {
        return window.requestIdleCallback(fn, { timeout: timeoutMs });
      }
      return setTimeout(fn, timeoutMs);
    };

    const cancelIdle = (id) => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(id);
      } else {
        clearTimeout(id);
      }
    };

    // Stage 2: ShopByCollection after initial render (idle, 80ms)
    const id2 = runIdle(() => setStage(2), 80);

    // Stage 3: BestSellers (idle, 200ms)
    const id3 = runIdle(() => setStage(3), 200);

    // Stage 4: TrustBar (idle, 320ms)
    const id4 = runIdle(() => setStage(4), 320);

    // Stage 5: All remaining sections (idle, 450ms)
    const id5 = runIdle(() => setStage(5), 450);

    return () => {
      cancelIdle(id2);
      cancelIdle(id3);
      cancelIdle(id4);
      cancelIdle(id5);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F2EFE7]">
      <Navbar />
      <main>
        <Hero />
        <DeferredSection minHeight="500px" stageEnabled={stage >= 2}>
          <Suspense fallback={<div className="min-h-[500px]" />}>
            <ShopByCollection />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight="450px" stageEnabled={stage >= 3}>
          <Suspense fallback={<div className="min-h-[450px]" />}>
            <BestSellers />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight="220px" stageEnabled={stage >= 4}>
          <Suspense fallback={<div className="min-h-[220px]" />}>
            <TrustBar />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight="550px" stageEnabled={stage >= 5}>
          <Suspense fallback={<div className="min-h-[550px]" />}>
            <FeaturedRecipes />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight="600px" stageEnabled={stage >= 5}>
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <CraftedWithHeritage />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight="350px" stageEnabled={stage >= 5}>
          <Suspense fallback={<div className="min-h-[350px]" />}>
            <Testimonials />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight="320px" stageEnabled={stage >= 5}>
          <Suspense fallback={<div className="min-h-[320px]" />}>
            <Newsletter />
          </Suspense>
        </DeferredSection>
      </main>
      <DeferredSection minHeight="400px" stageEnabled={stage >= 5}>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Footer />
        </Suspense>
      </DeferredSection>
    </div>
  );
}
