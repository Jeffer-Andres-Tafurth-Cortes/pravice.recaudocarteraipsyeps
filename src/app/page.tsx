import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import MethodologySection from "./components/MethodologySection";
import ClientsSection from "./components/ClientsSection";
import HonorariosSection from "./components/HonorariosSection";
import WhyChoosingUs from "./components/WhyChoosingUs";
import AppSection from "./components/AppSection";
import UseCaseSection from "./components/UseCaseSection";
import FinalCtaSection from "./components/FinalCtaSection";
import BenefitsSection from "./components/BenefitsSection";
import DocumentationSection from "./components/DocumentationSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <MethodologySection />
      <WhyChoosingUs />
      <HonorariosSection />
      <ClientsSection />
      <AppSection />
      <BenefitsSection />
      <UseCaseSection />
      <DocumentationSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
