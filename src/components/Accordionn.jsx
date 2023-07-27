import { useState } from "react";
import {PiCaretUp, PiCaretDown} from "react-icons/pi";


const Accordionn = ({ title, content }) => {

const [isActive, setIsActive] = useState(false);

function handleClick () {
  setIsActive(!isActive)
} 

    return (
      <div className="accordion-item mb-4 bg-white bg-opacity-20 rounded-md cursor-pointer" >
        <div className="flex justify-between p-4 md:px-8 font-medium" onClick={handleClick}>
          {title}

          <span className="sr-only">Open Accordion</span>
        {!isActive ?  <PiCaretDown size="1.5rem" />
        :  <PiCaretUp size="1.5rem" />}
        </div>

       {isActive && <p className=" p-4 md:px-8 text-sm rounded-b-md bg-white text-black">
          {content}
        </p>}
      </div>
    );
  }

export default Accordionn;
