import React from "react";
import {
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
  FaPhone,
  FaTwitter,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

function Footer() {
  return (
    <div className="mt-12">
       <div
        className="flex  flex-row flex-wrap lg:flex-row  gap-7 justify-between  p-10 text-white px-4 lg:px-[120px] bg-cover bg-center"
        style={{
          background: `url('https://loading.io/assets/img/c/bg/cloud-dark.svg') no-repeat center/cover`,
          opacity: 1,
          visibility: "visible",
        }}
      >
        <nav className="flex flex-col">
          <h2 className="footer-title">Company</h2>
          <a href="https://dotpotit.com">Home</a>
          <a href="https://dotpotit.com/about">About us</a>
          <a href="https://dotpotit.com/contact">Contact</a>
        </nav>
        <nav className="flex flex-col">
          <h2 className="footer-title">Services</h2>
          <a href="https://dotpotit.com/web-development/landing-page">
            Web Development
          </a>
          <a href="https://dotpotit.com/key-features/it-support/#cloud-computing">
            IT Support
          </a>
          <a href="/">Marketing</a>
        </nav>
       

        <nav>
          <h2 className="footer-title mb-3">Contact</h2>
          <div className="flex flex-col lg:flex-row gap-9 lg:gap-6">
            <div className="flex flex-col gap-2">
              <p> Branch-1</p>
              <a
                href="https://dotpotit.com"
                className="flex gap-2 items-center"
              >
                <FaLink /> www.dotpotit.com
              </a>
              <p className="flex gap-2 items-center">
                <FaMobile /> +44 7441 427459{" "}
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <FaLocationArrow /> 71-75 Shelton St,
               
                London WC2H 9JQ,
               
                United Kingdom{" "}
              </p>
            </div>
            <div className="flex flex-col gap-3">
            <p> Branch-2</p>
            <a
                href="https://dotpotit.com"
                className="flex gap-2 items-center"
              >
                <FaLink /> www.dotpotit.com
              </a>
              <p className="flex gap-2 items-center">
                <FaMobile /> +880 1817 176192{" "}
              </p>

              <p className="flex gap-2 items-center">
                {" "}
                <FaLocationArrow /> House-1 Road-3 ,
                Block-A Mirpur-10 ,Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </nav>
        <nav>
          <h2 className="footer-title">Email</h2>
          <div className="flex flex-col gap-3">
            <div>
              <a href="mailto:help@dotpotit.com">help@dotpotit.com</a> <br />
              <a href="mailto:hr@dotpotit.com">hr@dotpotit.com</a> <br />
              <a href="mailto:marketing@dotpotit.com">marketing@dotpotit.com</a>
            </div>
          </div>
        </nav>
      </div>
      <div className="footer  py-4 border-t  text-white px-2 lg:px-[120px] border-base-300">
        <aside className="items-center grid-flow-row">
          <h1 className="w-[25vh] lg:w-[250px] font-bold transform translate-y-5">
            <Image
              width={260}
              height={240}
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704543228/vkahrznyuobgcnmnltq9.png"
              alt=""
            />
          </h1>
          <h4 className="transform translate-x-16 -translate-y-4">
            Providing reliable tech since 2019
          </h4>
        </aside>
        <nav className="place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="mailto:help@dotpotit.com">
              {" "}
              <AiOutlineMail className="text-2xl" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B8801817176192&text&type=phone_number&app_absent=0">
              <FaWhatsapp className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/company/dotpotit ">
              {" "}
              <FaLinkedin className="text-2xl" />{" "}
            </a>{" "}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
