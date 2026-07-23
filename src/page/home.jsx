import Navbar from "../components/navbar/navbar";
import Hero from "../section/hero/hero";
import Official from "../section/official/official";
import Counter from "../section/counter/counter";
import AiSection from "../section/aisection/aisection";
import Testimonial from "../section/testimonial/testimonial";  
import Cta from "../section/cta/cta";
import Competitor from "../section/competitor/competitor";
import DashboardMock from "../section/feature/page";
import Pricing from "../section/pricing/pricing";
import Faq from "../section/faq/faq";
import Contact from "../section/contact/contact";
import Footer from "../section/footer/footer";

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
