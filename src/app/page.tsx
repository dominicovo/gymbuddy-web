import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import InsideApp from '@/components/InsideApp';
import CheckIn from '@/components/CheckIn';
import StatsBar from '@/components/StatsBar';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import DayTimeline from '@/components/DayTimeline';
import Buddies from '@/components/Buddies';
import Comparison from '@/components/Comparison';
import Faq from '@/components/Faq';
import Testimonials from '@/components/Testimonials';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <StatsBar />
        <HowItWorks />
        <DayTimeline />
        <InsideApp />
        <CheckIn />
        <Features />
        <Buddies />
        <Comparison />
        <Testimonials />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
