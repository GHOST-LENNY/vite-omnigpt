import { IconContext } from "react-icons";

import { BiUpload, BiMicrophone, BiSend } from "react-icons/bi";


function Screen() {
  return (
    <div className="hidden lg:flex rounded-sm justify-center bg-black my-32 mx-20 ">
      <div className="relative flex justify-center">
        <img src="/OmniGPT images/Group 1335.png" className="mt-32" alt="" />

        <div className="flex h-14 w-[720px] absolute items-center bottom-8 bg-white rounded-md">
         
          <IconContext.Provider value={{ className:'mr-4 text-[#8F9FB2] cursor-pointer hover:text-gray-500', size:'2rem' }}>
            <BiUpload className='ml-4' />
            <BiMicrophone />
          </IconContext.Provider>

          <input
            type="text"
            placeholder="Can you help me find a restaurant nearby?"
            className="bg-[#F7F7F8] mx-auto w-full items-center placeholder-gray-400
             text-gray-600 rounded-md py-2 px-4 outline-none focus:ring-gray-500 border-none focus:ring-1"
          />
            <BiSend className="mx-3 text-3xl text-[#05E283] cursor-pointer hover:text-emerald-500" />
          
      </div>
    </div>
    </div>
  );
}

export default Screen;
