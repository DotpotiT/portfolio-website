import Image from "next/image";
import React from "react";
function Navbar() {
  return (
    <div>
      <div className=" relative z-10 lg:flex py-2 lg:py-3 bg-black opacity-85 px-2 w-full lg:max-w-screen-full  md:px-2   lg:px-[240px] ">
        <div className="flex flex-row  justify-between gap-20  items-center md:gap-[50vh] lg:gap-[118vh]  ">
          <a href="/" className="font-semibold lg:font-bold  ">
          <Image
              width={200}
              height={180}
              loading="lazy"
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704543228/vkahrznyuobgcnmnltq9.png"
              alt="Dotpot iT Logo"
            />
          </a>
          <button className= " nav px-5 text-sm mt-6" >
             
              
             <span className="text-md   items-center">
              <a href="https://dotpotit.com/" className="flex flex-row" >Visit  Website </a>
             </span>
          
           <div className="liquids"></div>
         </button>
 
        </div>
      </div>
    </div>  
  );
}

export default Navbar;
