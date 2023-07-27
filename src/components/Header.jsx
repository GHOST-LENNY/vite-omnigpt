import img2 from "/OmniGPT images/Group 13353.png";
// import Buttons from './Buttons';

function Header() {
  return (
    <>
      <header className="lg:hidden mt-2 md:mt-10 mx-7 sm:mx-12 md:mx-16 lg:mx-20 items-center font-generalSans">
        <img
          className="lg:hidden w-[900px] mx-auto mb-6"
          src="OmniGPT images/Group 13355.png"
          alt=""
        />
        <h1 className="sm:text-6xl md:text-7xl  sm:leading-tight text-4xl font-medium font-meridian">
          Bring the power <br />
          of AI to your <br />
          <span className="relative z-0">
            conversations
            <img
              className="absolute -z-10 top-0.5 left-0 sm:w-[640px]"
              src="/OmniGPT images/Vector(4).png"
              alt=""
            />
          </span>
        </h1>

        <h2 className="text-[26px] md:text-3xl font-medium my-4 px-">
          Work Faster, Smarter, and Better Together
        </h2>

        <p className="md:max-w-xl md:leading-relaxed md:text-xl font-light">
          Experience the power of AI language models with OmniGPT. Our chat
          platform provides seamless communication across multiple channels.
        </p>

        <h3 className="md:text-xl mt-4 md:mt-8 text-xl font-medium">
          Try the OmniGPT for free. 15-day trial, no credit card required.
        </h3>

        <button
          className="font-poppins bg-[#1FC77E] my-7 
          rounded-md py-4 px-8 text-center cursor-pointer hover:bg-emerald-600 duration-300 ease-in-out"
        >
          Start your free trial
        </button>
      </header>

      <div className="hidden lg:flex font-generalSans text-white items-center justify-between my-6 mx-20">
        <div>
          <h1 className="text-5xl xl:text-[80px] lg:leading-tight font-medium font-meridian mb-8">
            Seamless <br /> Communication <br />
            <span className="relative z-0">
              with OmniGPT
              <img
                className="absolute -z-10 top-0 w-[1000px]"
                src="/OmniGPT images/Vector(4).png"
              />
               
            </span>
          </h1>
         
          <h3 className="text-3xl xl:text-4xl font-medium">Powered by Chat GPT-4</h3>
          <p className="font-light xl:text-xl my-4">
            Experience the power of AI language models with OmniGPT. <br />
            Our chat platform provides seamless communication <br /> across
            multiple channels.
          </p>
          <h4 className="mt-8 xl:text-xl">
            Try for free 15 days trial, no credit card required.
          </h4>

          <button className="bg-[#1FC77E] hover:bg-emerald-600 duration-300 ease-in-out font-poppins px-6 py-4 mt-6 rounded-md">
            Start your free trial
          </button>
        </div>

        <img src={img2} className="w-96 xl:w-auto" alt="Hero image" />
      </div>
    </>
  );
}

export default Header;
