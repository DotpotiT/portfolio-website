import Image from "next/image";
import React from "react";
function Navbar() {
  return (
    <div>
      <div className="navbar lg:flex fixed z-10 bg-black opacity-85 px-0  md:px-2  lg:px-[240px]">
        <div className="flex flex-row justify-between gap-2 md:gap-[50vh] lg:gap-[118vh] ">
          <a href="/" className="font-semibold lg:font-bold  ">
            <Image
              width={230}
              height={230} className=""
              loading="lazy"
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704543228/vkahrznyuobgcnmnltq9.png"
              alt="Dotpot iT Logo"
            />
          </a>

          <a
            href="https://dotpotit.com/"
            className=" btn-outline inline-block px-1 ml-11 lg:ml-2 w-[12vh] lg:w-[20vh] py-2 rounded-xl border-2 border-transparent text-black font-bold bg-gradient-to-r from-gray-600 to-orange-400 transform hover:rotate-y-3 hover:rotate-x-3 flex-row items-center text-2sm text-center"
          >Visit
          <span className="hidden lg:visible">our </span>  Website
          </a>
        </div>
      </div>
    </div>  
  );
}

export default Navbar;
