import ServicePage from '@/components/Services/Service';
import HomePage from '@/components/Home/Home';
import Navbar from '@/components/Navbar/Navbar';
import TestimonialPage from '@/components/Testimonial/Testimonial';
import TeamPage from '@/components/Team/Team';
import SupportPage from '@/components/Support/Support';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Navbar />
        <HomePage />
      </div>

      <ServicePage />
      <TestimonialPage />
      <TeamPage />
      <SupportPage />
      <Footer />
    </main>
  );
}
