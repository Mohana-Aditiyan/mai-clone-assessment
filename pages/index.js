import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingHelp from "@/components/ui/FloatingHelp";
import Hero from "@/sections/Hero";
import ServicesMarquee from "@/sections/ServicesMarquee";
import ToolkitDashboard from "@/sections/ToolkitDashboard";
import HowItWorks from "@/sections/HowItWorks";
import RealProjects from "@/sections/RealProjects";
import WhyChooseMAI from "@/sections/WhyChooseMAI";
import OurDifference from "@/sections/OurDifference";
import LatestBlog from "@/sections/LatestBlog";
import Testimonials from "@/sections/Testimonials";
import CTABanner from "@/sections/CTABanner";

/* Background portrait used behind the page's main content area.
   Visible only where a section has a transparent background (Testimonials). */
const MAIN_BG_IMAGE =
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1600&q=80&auto=format&fit=crop";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Find Trusted Stones &amp; Masons in UK | Myproject.ai</title>
        <meta
          name="description"
          content="Your project reaches 1,000+ Fabricators, Suppliers, Stones & Masons in UK. Post your job free and get fast quotes from verified trades."
        />
      </Head>

      <Navbar />

      <main className="relative">
        {/* ── Fixed background image — sits behind every section in <main>.
              All other sections have opaque backgrounds (bg-surface, bg-white, etc.)
              so they cover this image. Testimonials has a transparent background,
              which lets the image show through there. The dark gradient overlay
              keeps the section's white text readable when revealed. ── */}
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden="true"
        >
          <Image
            src={MAIN_BG_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/20" />
        </div>

        <Hero />
        <ServicesMarquee />
        <ToolkitDashboard />
        <HowItWorks />
        <RealProjects />
        <WhyChooseMAI />
        <OurDifference />
        <LatestBlog />
        <Testimonials />
        <CTABanner />
      </main>

      <Footer />

      <FloatingHelp />
    </>
  );
}