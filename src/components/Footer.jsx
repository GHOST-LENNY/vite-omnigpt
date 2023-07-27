import { BiSend } from "react-icons/bi";

const Footer = () => {
  return (
    // mx-7 md:mx-16 lg:mx-36
    <footer className="relative bg-black px-7 sm:px-12 md:px-20 lg:px-36">
      <div
        className="relative -top-36 xl:flex items-center 
      bg-[#05E283] rounded-xl p-8 md:p-16 lg:p-24 lg:gap-32 font-meridian"
      >
        <h1 className="text-2xl md:text-5xl text-center xl:text-left pb-4 font-medium">
          <span className="text-black">
            Join the OmniGPT <br />
            community
          </span>{" "}
          and transform the way you collaborate!
        </h1>

        <button
          className="bg-black font-poppins flex-none text-xl lg:text-base font-medium flex 
          items-center px-4 py-3 md:px-8 md:py-6 lg:p-4 mx-auto rounded-lg cursor-pointer 
        hover:scale-110 duration-300 ease-in-out"
        >
          Get Started Now
        </button>
      </div>

      <div className="main-footer ">
        <a href="" className="">
          <img
            className="w-36 sm:w-48 lg:hidden"
            src="OmniGPT images/Group 13340.png"
            alt="logo"
          />
        </a>

        <div className="font-generalSans md:flex justify-between mt-8 pb-12 font-mediu">
          <div className="lg:grid grid-cols-1 hidden">
            <a href="">
              <img
                className="w-36"
                src="OmniGPT images/Group 13340.png"
                alt="logo"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6 sm:gap-x-32 text-lg sm:text-3xl md:text-2xl w-fit pb-6">
            <a
              href=""
              className=" hover:text-gray-300 active:text-emerald-500 focus:text-red-400 duration-300 ease-in-out"
            >
              Lorem Ipsum
            </a>
            <a
              href=""
              className=" hover:text-gray-300 active:text-emerald-500 focus:text-gray-400 duration-300 ease-in-out"
            >
              Lorem Ipsum
            </a>
            <a
              href=""
              className=" hover:text-gray-300 active:text-emerald-500 focus:text-gray-400 duration-300 ease-in-out"
            >
              Lorem Ipsum
            </a>
            <a
              href=""
              className=" hover:text-gray-300 active:text-emerald-500 focus:text-gray-400 duration-300 ease-in-out"
            >
              Lorem Ipsum
            </a>
            <a
              href=""
              className=" hover:text-gray-300 active:text-emerald-500 focus:text-gray-400 duration-300 ease-in-out"
            >
              Lorem Ipsum
            </a>
          </div>

          <div>
            <h2 className="uppercase mb-6 tracking-[3px] text-[#05E283] font-semibold text-lg sm:text-4xl md:text-2xl">
              Lorem ipsum dolar
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 sm:gap-x-32 text-lg sm:text-3xl md:text-2xl w-fit">
              <a
                href=""
                className=" hover:text-gray-300 active:text-emerald-500 focus:text-gray-400 duration-300 ease-in-out"
              >
                Lorem Ipsum
              </a>
              <a
                href=""
                className=" hover:text-gray-300 active:text-emerald-500 focus:text-gray-400 duration-300 ease-in-out"
              >
                Lorem Ipsum
              </a>
              <a
                href=""
                className=" hover:text-gray-300 active:text-emerald-500 focus:text-gray-400 duration-300 ease-in-out"
              >
                Lorem Ipsum
              </a>
            </div>
          </div>

          <div className="hidden xl:block space-y-4">
            <p className="font-medium">Join our newsletter</p>

            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
              <input
                type="text"
                className="w-full rounded-xl font-light px-4 py-3 bg-black placeholder-gray-400 
              text-white border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                placeholder="Your Email" ></input>
      <BiSend className=" absolute right-4 text-2xl text-[#05E283] cursor-pointer hover:text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
