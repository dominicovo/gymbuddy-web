import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ImageStrip from '@/components/ImageStrip';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <ImageStrip />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
