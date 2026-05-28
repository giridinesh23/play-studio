import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import TrustedBy from "@/components/home/TrustedBy";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <FeaturedProjects />
      <TestimonialsSlider />
      <TrustedBy />
      <CTABanner />
    </>
  );
}
