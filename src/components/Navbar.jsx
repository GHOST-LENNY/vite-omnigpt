import { useState } from "react";
import img from "/Group 13340.png";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const navLinks = [
  { name: "Blog", link: "/blog" },
  { name: "Contact Us", link: "/" },
  { name: "Sign In", link: "/" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <>
      <nav className="bg-[#131924] flex justify-between py-6 px-7 sm:px-12 md:px-16 lg:px-20">
        <img className="h-6 w-24 md:w-auto cursor-pointer" src={img} alt="OmniGPT Logo" />

        <ul className="text-white font-poppins hidden lg:flex items-center gap-16">
          {navLinks.map((link) => {
            return (
              <li
                key={link.name}
                className="text-lg hover:text-gray-400 focus:text-emerald-400 cursor-pointer transition-all duration-500 ease-in-out"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            );
          })}
        </ul>

        <button
          className="inline-flex lg:hidden items-center justify-center hover:shadow-md 
          hover:bg-gray-500 rounded-md hover:bg-opacity-40 transition-all duration-300 "
          onClick={handleMenu}
        >
          <span className="sr-only"> Open Main Menu </span>
          {!open ? (
            <MdMenu className="text-2xl md:text-[28px]"/>
          ) : (
            <MdOutlineClose className="text-2xl md:text-[28px]" />
          )}
        </button>
      </nav>

      {/* mobile-menu */}
      {open && (
        <div className="lg:hidden bg-[#121722]">
          <div className="pt-2 pb-3 space-y-2 px-5 sm:px-9 md:px-[70px]">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.name}
                  className="text-base md:text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 focus:text-emerald-400 cursor-pointer transition duration-300 ease-in-out"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
