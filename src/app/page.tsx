"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AIFutureSection from "@/components/sections/AIFutureSection";
import RustFutureSection from "@/components/sections/RustFutureSection";
import ContactSection from "@/components/sections/ContactSection";
import StarField from "@/components/three/StarField";

export default function Home() {
  return (
    <>
      {/* Animated Starfield Background */}
      <StarField />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />

        <main>
          <HeroSection />
          <AIFutureSection />
          <RustFutureSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
