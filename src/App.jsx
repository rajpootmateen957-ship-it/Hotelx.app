import Navbar from "./components/Layout/navbar";
import Hero from "./components/section/hero";
import Official from "./components/section/official";
import Counter from "./components/section/counter";
import AiSection from "./components/section/aisection";
import Testimonial from "./components/section/testimonial";  
import Cta from "./components/section/cta";
import Competitor from "./components/section/competitor";
import DashboardMock from "./components/section/feature/page";
import Pricing from "./components/section/pricing";
import Faq from "./components/section/faq";
import Contact from "./components/section/contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Official />
      <Counter />
      <AiSection />
<DashboardMock/>

      <Testimonial />
      <Cta />
      <Competitor />
      <Pricing />
      <Faq />
      <Contact />
       

     
      
    </>
  );
}

export default App;