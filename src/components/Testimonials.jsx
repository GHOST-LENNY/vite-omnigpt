import vector1 from "/OmniGPT images/Vector.png";
import vector2 from "/OmniGPT images/Vector(2).png";

import Swiper from "./Swiper";

const Testimonials = () => {
  return (
    
      <section className="mx-7 sm:mx-12 md:mx-20 lg:mx-36">

        <div className="flex relative">

        
            <h1 className="text-4xl lg:text-5xl xl:text-6xl w-52 sm:w-fit font-medium font-meridian">
              See what People <br className="hidden sm:block" /> 
              Are
              <span className="text-[#1FC77E]"> Saying About Us</span>{" "}
            </h1>
          

          <div className="absolute top-12 right-0 sm:top-6 sm:right-8">
            <img
              className="relative w-[60px] md:w-auto left-6"
              src={vector1}
              alt=""
            />
            <img
              className="relative top-2 w-[100px] md:w-auto"
              src={vector2}
              alt=""
            />
          </div>

        </div>
        <Swiper />
      </section>

      
    
  );
};

export default Testimonials;
