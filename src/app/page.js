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
   <Header/>
  <Main/>
  <About/>
  <Services/>
  <Process/>
  <Projects/>

  <Testimonials/>
  <Footer/>

   </>
   
  );
}
