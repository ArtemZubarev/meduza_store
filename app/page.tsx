import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Horeca from "./components/Horeca";
import Stats from "./components/Stats";
import Cases from "./components/Cases";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f2f2f2]">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Features Section */}
      <Features />
      {/* Process Section */}
      <Process />
      {/* Services Section */}
      <Services />
      {/* HoReCa Section */}
      <Horeca />
      {/* Stats Section */}
      <Stats />
      {/* Case Studies */}
      <Cases />
    </div>
  );
}
