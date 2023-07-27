import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Accordion from "./components/Accordion";
import Pricing from "./components/Pricing";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    
      <div className=" bg-[#111826] text-white">
        <Navbar />
        <Header />
        <Screen />
        <Accordion />
        <Pricing />
        <Integrations />
        <Testimonials />
        <Footer />
      </div>
    
  );
}

export default App;