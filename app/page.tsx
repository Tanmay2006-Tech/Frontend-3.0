import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Statistics } from '@/components/Statistics';
import { VideoShowcase } from '@/components/VideoShowcase';
import { CaseStudies } from '@/components/CaseStudies';
import { Workflow } from '@/components/Workflow';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Statistics />
      <VideoShowcase />
      <CaseStudies />
      <Workflow />
      <Pricing />
      <Footer />
    </main>
  );
}
