import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye} from "react-icons/fa6";

function Products() {
  return (
    <div className="max-w-[1400px] mx-auto px-3">
      <h2 className="text-3xl py-5 text-center mb-14 font-bold text-gray-400">
        Our Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 px-2 md:px-10 lg:px-20">
        <Link href="https://www.rmjautos.com/"
          
          
        >
          <div className="rounded-lg shadow-md  shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden bg-base-100/50 aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("rmjAutosDescription").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("rmjAutosDescription").style.opacity = "0";
          }}
          >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705235913/rmjautos.com_le3k7f.jpg"
                alt="rmj-autos"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3">
              RMJ AUTOS
            </h2>
         
              <p className="text-lg text-semibold flex justify-center  text-neutral-content pt-2 pb-3">
                Web Application
              </p>
           
            <div  id="rmjAutosDescription"></div>
           
          </div>
          </div>
         
        </Link>
        <Link href='https://mypremo.com/'>
        <div
          className="rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden bg-base-100/50 aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("premoDescription").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("premoDescription").style.opacity = "0";
          }}
        >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705235915/mypremo.com_dzheom.jpg"
                alt="premo"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3">
              Premo
            </h2>
         
              <p className="text-lg text-semibold flex justify-center text-neutral-content pt-2 pb-3">
                Mobile Application
              </p>
              <div id="premoDescription"></div>
           
          </div>
        </div>
        </Link>
       

       <Link href="https://flipper.com.bd">
       <div
          className="rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden bg-base-100/50 aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("flipperDescription").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("flipperDescription").style.opacity = "0";
          }}
        >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705236989/flipper.com.bd__rszjsr.jpg"
                alt="flipper"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3">
              Flipper
            </h2>
          
              <p className="text-lg text-semibold flex justify-center text-neutral-content pt-2 pb-3">
                Web Application
              </p>
             
              <div  id="flipperDescription"></div>
          
          </div>
        </div>
       </Link>

               
               
       <Link   href="https://www.selectelwireless.com/"
 >
       <div
          className="rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden bg-base-100/50 aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("wireless").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("wireless").style.opacity = "0";
          }}
        >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705306665/selectelwireless.com_yr0lzr.jpg"
                alt="selectel wireless"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3">
              Selectel Wireless
            </h2>
         
              <p className="text-lg text-semibold flex justify-center pt-2 pb-3 text-neutral-content">
                Web Application
              </p>
             
              <div  id="wireless" ></div>
              
        
          </div>
        </div>
       </Link>

      <Link href="https://noirbd.com/">
      <div
          className="rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden bg-base-100/50 aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("noirDescription").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("noirDescription").style.opacity = "0";
          }}
        >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705235914/noirbd.com_nhjwgs.jpg"
                alt="noir"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3">
              Noir
            </h2>
           
              <p className="text-lg text-semibold text-neutral-content  flex justify-center pt-2 pb-3">
                Web Application
              </p>
              
              <div id="noirDescription" ></div>
      
          </div>
        </div>
      </Link>

       <Link href="https://www.forefront-bd.com/" >
       <div
          className="rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden bg-base-100/50 aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("forefrontDescription").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("forefrontDescription").style.opacity = "0";
          }}
        >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705235913/forefront-bd.com_cgrlsa.jpg"
                alt="fore-front"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3">
              ForeFront
            </h2>
           
              <p className="text-lg text-semibold flex justify-center text-neutral-content pt-2 pb-3">
                Web Application
              </p>
         <div  id="forefrontDescription" ></div>
          </div>
        </div>
       </Link>

      <Link href="https://authentikabd.com/">
      <div
          className="rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("authentika").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("authentika").style.opacity = "0";
          }}
        >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705236629/authentika.com_k45o92.jpg"
                alt="authentika"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3  ">
              {" "}
              Authentika
            </h2>
        
              <p className="text-lg text-semibold text-neutral-content flex justify-center pt-2 pb-3">
                Web Application
              </p>
             <div   id="authentika"></div>
       
          </div>
        </div>
      </Link>
       
      <Link    href="https://evincegroupbd.com/"
          >
          <div
          className="rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("evincegroupbd").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("evincegroupbd").style.opacity = "0";
          }}
        >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705236630/evincegroupbd.com_mwvfna.jpg"
                alt="evincegroupbd"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3  ">
              Evince Group BD
            </h2>
           
              <p className="text-lg text-semibold text-neutral-content flex justify-center pt-2 pb-3">
                Web Application
              </p> <div
              id="evincegroupbd"
             
            >
            
            </div>
          </div>
        </div>
          </Link>

     <Link href="https://luliz.com/">
     <div
          className="rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden aos-init aos-animate"
          style={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => {
            document.getElementById("description").style.opacity = "1";
          }}
          onMouseLeave={() => {
            document.getElementById("description").style.opacity = "0";
          }}
        >
          <div className="relative w-full h-60 overflow-hidden">
            <div className="h-max card">
              <Image
                width={400}
                height={300} loading="lazy"
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705235918/luliz.com_lkgndp.jpg"
                alt="luiz"
                className="object-cover object-top w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400   pt-3">
              Luliz
            </h2>
          
              <p className="text-lg text-semibold text-neutral-content flex justify-center pt-2 pb-3">
                Web Application
              </p>
              <div
              id="description"
              
            >
            </div>
          </div>
        </div>
     </Link>
      </div>
    </div>
  );
}

export default Products;
