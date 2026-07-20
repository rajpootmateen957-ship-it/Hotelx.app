import Navbar from "../components/Layout/navbar";
import Hero from "../section/hero";
import Official from "../section/official";
import Counter from "../section/counter";
import AiSection from "../section/aisection";
import Testimonial from "../section/testimonial";  
import Cta from "../section/cta";
import Competitor from "../section/competitor";
import DashboardMock from "../section/feature/page";
import Pricing from "../section/pricing";
import Faq from "../section/faq";
import Contact from "../section/contact";
import Footer from "../section/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Official />
      <Counter />
      <AiSection />
      <DashboardMock />
      <Testimonial />
      <Cta />
      <Competitor />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
