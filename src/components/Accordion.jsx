import Accordionn from "./Accordionn";
import {accordionItems} from "./accordionItems";
import iphoneSM from "/OmniGPT images/Group 13354.png";

function Accordion() {
  return (
   
      <section className="lg:flex flex-row-reverse justify-center items-center lg:px-7 gap-8 xl:gap-32 lg:my-32">
        <div className="mx-7 sm:mx-12 md:mx-16 md:mb-6 lg:m-0 lg:w-min font-generalSans">
          <h1 className="font-medium text-4xl sm:text-6xl my-4 font-meridian">
            The <span className="text-[#1FC77E]">All-in-One</span> <br />
            Solution for Conversational AI
          </h1>

          <div
            className="bg-white text-black rounded-lg 
          px-4 py-8 md:p-8 lg:p-6 mb-7 md:flex items-center justify-between"
          >
            <div>
              <h3 className="font-medium text-xl md:text-2xl lg:text-base mb-2">
                Seamless Collaboration
              </h3>

              <p className="font-normal text-lg md:text-xl lg:text-[14px]">
                You can easily collaborate with friends and colleagues on
                projects, whether it&apos;s for work
                <br className="hidden md:block lg:hidden" /> or personal use.
              </p>
            </div>
            <div className="hidden md:block flex-none ml-12">
              <img src="OmniGPT images/Group 13362.png" alt="" />
            </div>
          </div>

          <div className="">
            {accordionItems.map(({ title, content }) => (
              <Accordionn key={title} title={title} content={content} />
            ))}
          </div>
        </div>

        <figure className="mx-7 my-8 md:my-16 lg:m-0">
          <img className="mx-auto lg:flex lg:flex-none" src={iphoneSM} alt="" />
        </figure>
      </section>

   
  );
}

export default Accordion;
