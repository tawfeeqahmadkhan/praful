import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-white ">
        <Header />
        <Main />
      </div>
      <Process />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Footer />

    </>

  );
}
