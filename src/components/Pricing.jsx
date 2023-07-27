import { BiSolidCheckCircle } from "react-icons/bi";

const Pricing = () => {
  return (
    <section id="pricing" className="hidden lg:block my-8 mx-auto ">
      <h1 className="mx-auto font-meridian text-7xl text-center font-medium justify-center mb-8">
        <span className="text-[#1FC77E]">Accessible</span> pricing <br /> for
        all users
      </h1>

      <div className="bg-white bg-opacity-20 w-80 text-neutral-100 font-poppins mx-auto p-8 rounded-md border border-neutral-500">
        <div className="flex gap-4">
          <p className="bg-black text-xs px-2 py-1 rounded-md">Most popular</p>
          <p className="bg-amber-200 text-amber-800 font-medium text-xs px-2 py-1 uppercase rounded-md">
            Test mode
          </p>
        </div>

        <h3 className="font-medium text-xl py-2">Standard</h3>
        <p className="pb-4 font-light text-sm">
          Upgrade your productivity with AI-powered technology
        </p>
        <h1 className="flex items-center text-5xl font-bold py-4">
          $7 <p className="pl-1 text-xs font-light w-min">per month</p>
        </h1>

        <button className=" bg-[#1FC77E] hover:bg-emerald-500 hover:text-white text-black rounded-md my-2 w-full py-3 px-4">
          Start trial
        </button>

        <p className="text-sm font-light">This includes:</p>
        <ul className="font-light text-sm mt-2 space-y-2.5">
          <l1 className="flex">
            <BiSolidCheckCircle className="mr-4 w-4" /> Use OmniGPT from your
            WhatsApp
          </l1>
          <l1 className="flex">
            <BiSolidCheckCircle className="mr-4 w-4" /> Transcribe speech into text
          </l1>
          <l1 className="flex">
            <BiSolidCheckCircle className="mr-4 w-4" /> Download your chat
            conversations
          </l1>
          <l1 className="flex">
            <BiSolidCheckCircle className="mr-4 w-4" /> Upload documents to get <br />
            better insights
          </l1>
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
