import Image from "next/image";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

function Products() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <h2 className="text-2xl py-5 text-center text-gray-400">
        Our Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 px-2 md:px-10 lg:px-20">
        <div
          className="rounded-lg shadow-md  shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden bg-base-100/50 aos-init aos-animate"
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
            <div
              id="rmjAutosDescription"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-1 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Web Application
              </p>
              <a   alt="RMJ Autos Project"
                href="https://www.rmjautos.com/"
                className="text-2xl text-purple-600" aria-label="project live site link"
              >
                <FaEye />
              </a>
            </div>
          </div>
        </div>

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
            <div
              id="premoDescription"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-3 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Mobile Application
              </p>
              <a   alt="Premo Project"
                href="https://www.rmjautos.com/"
                className="text-2xl text-purple-600" aria-label="project live site link"
              >
                <FaEye />
              </a>
            </div>
          </div>
        </div>

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
            <div
              id="flipperDescription"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-1 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Web Application
              </p>
              <a
                href="https://flipper.com.bd"
                className="text-2xl text-purple-600" aria-label="project live site link"   alt="Flipper Project"
              >
                <FaEye />
              </a>
            </div>
          </div>
        </div>
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
            <div
              id="wireless"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-1 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Web Application
              </p>
              <a
                href="https://www.selectelwireless.com/"
                className="text-2xl text-purple-600" aria-label="project live site link" alt="selectelwireless project"
              >
                <FaEye />
              </a>
            </div>
          </div>
        </div>

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
            <div
              id="noirDescription"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-1 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Web Application
              </p>
              <a href="https://noirbd.com/" className="text-2xl text-purple-600" aria-label="project live site link" alt="noir" >
                <FaEye />
              </a>
            </div>
          </div>
        </div>

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
            <div
              id="forefrontDescription"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-1 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Web Application
              </p>
              <a
                href="https://www.forefront-bd.com/"
                className="text-2xl text-purple-600" aria-label="project live site link" alt="Forefont"
              >
                <FaEye />
              </a>
            </div>
          </div>
        </div>

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
            <div
              id="authentika"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-1 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Web Application
              </p>
              <a
                href="https://authentikabd.com/"
                className="text-2xl text-purple-600" aria-label="project live site link" alt="Authentika"
              >
                <FaEye />
              </a>
            </div>
          </div>
        </div>
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
            <div
              id="evincegroupbd"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-1 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Web Application
              </p>
              <a
                href="https://evincegroupbd.com/"
                className="text-2xl text-purple-600" aria-label="project live site link" alt="evincegroupbd"
              >
                <FaEye />
              </a>
            </div>
          </div>
        </div>
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
            <h2 className="text-gradient-primary text-center font-bold text-2xl mx-auto text-blue-400 pt-3  pt-3">
              Luliz
            </h2>
            <div
              id="description"
              style={{ opacity: 0, transition: "opacity 0.3s ease" }}
              className="flex text-center p-1 relative items-center justify-center gap-3 description"
            >
              <p className="text-lg text-semibold text-white">
                Web Application
              </p>
              <a href="https://luliz.com/" className="text-2xl text-purple-600" aria-label="project live site link" alt=" Luliz">
                <FaEye />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
