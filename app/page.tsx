import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import WhyVacationWeb from "../components/sections/WhyVacationWeb";
import ExampleScenario from "../components/sections/ExampleScenario";
import HowItWorks from "../components/sections/HowItWorks";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyVacationWeb />
        <ExampleScenario />
        <HowItWorks />
        <Footer />
      </main>
    </>
  );
}
