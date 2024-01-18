import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="mt-12">
      <div className="footer   text-white px-2 lg:px-[120px] border-base-300">
        <aside className="items-center grid-flow-row">
          <h1 className="w-[25vh] lg:w-[250px] font-bold transform translate-y-5">
            <Image
              width={260}
              height={240}
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704543228/vkahrznyuobgcnmnltq9.png"
              alt=""
            />
          </h1>
          <p className="transform translate-x-16 -translate-y-4">
            Help Business Successfull online
          </p>
        </aside>
      </div>
      <div
        className="flex  flex-row flex-wrap lg:flex-row   gap-5 justify-between  p-10 text-white px-4 lg:px-[120px] bg-cover bg-center"
        style={{
          background: `url('https://loading.io/assets/img/c/bg/cloud-dark.svg') no-repeat center/cover`,
          opacity: 1,
          visibility: "visible",
        }}
      >
        <nav className="flex flex-col  gap-4 lg:gap-9">
          <div className="flex flex-col lg:flex-row justify-between   gap-4 lg:gap-32">
            <div>
              <h2>Dotpot iT LTD</h2>
              <a
                href="https://www.google.com/maps/place/Dotpot+iT+Ltd/@51.5148525,-0.123525,15z/data=!4m6!3m5!1s0x487605a02838cbed:0xf63b335f5805893f!8m2!3d51.5148525!4d-0.123525!16s%2Fg%2F11v6sspb2h?hl=en&entry=ttuhttps://www.google.com/maps/uv?pb=!1s0x487605a02838cbed%3A0xf63b335f5805893f!3m1!7e115!4s%2Fmaps%2Fplace%2FDotpot%2BiT%2BLtd%2F%4051.5146962%2C-0.1235932%2C3a%2C75y%2C15.18h%2C90t%2Fdata%3D*213m4*211e1*213m2*211s9zvNB_8TjEOW7m15S4GVpg*212e0*214m2*213m1*211s0x487605a02838cbed%3A0xf63b335f5805893f%3Fsa%3DX%26ved%3D2ahUKEwjalp_imPKAAxWrT2wGHfTuAbEQpx96BAg4EAA%26hl%3Den!5sDotpot%20iT%20Ltd%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2s9zvNB_8TjEOW7m15S4GVpg&hl=en&sa=X&ved=2ahUKEwjalp_imPKAAxWrT2wGHfTuAbEQpx96BAhGEA0"
                target="_blank"
              >
                <p>71-75 Shelton St</p>
                <p>London WC2H 9JQ</p>
                <p>United Kingdom</p>
              </a>
              <p>
                <strong>Phone: </strong>
                <a href="+44 7441 427459"> +44 7441 427459 </a>
              </p>
            </div>

            <div>
              <p>Dotpot iT LTD</p>
              <a
                href="https://www.google.com/maps/place/Dotpot+iT/@23.8098024,90.3654215,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c154f4caa0ad:0x31fecdb3c5351d8d!8m2!3d23.8097975!4d90.3679964!16s%2Fg%2F11k9f3pm3k?entry=ttu"
                target="_blank"
              >
                <p>House-1 Road-3 </p>
                <p>Block-A Mirpur-10</p>
                <p>Dhaka Bangladesh</p>
              </a>
              <p>
                <strong>Phone:</strong>
                <a
                  href="+88 01817 176192"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +880 1817 176192
                </a>
              </p>
            </div>
          </div>

          <div>
            <p>
              <strong>Emails:</strong>{" "}
            </p>
            <p>help@dotpotit.com</p>
            <p> hr@dotpotit.com</p>
            <p> marketing@dotpotit.com</p>
            <div className="flex flex-row gap-3 mt-2">
              <a
                href="mailto:help@dotpotit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiOutlineMail className="text-xl" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B8801817176192&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/dotpotit "
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedin className="text-xl" />{" "}
              </a>{" "}
              <a
                href="https://twitter.com/dotpotit "
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaTwitter className="text-xl" />{" "}
              </a>{" "}
              <a
                href="https://www.facebook.com/dotpotit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaFacebook className="text-xl" />{" "}
              </a>{" "}
              <a
                href="https://www.instagram.com/dotpotit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaYoutube className="text-xl" />{" "}
              </a>{" "}
              <a
                href="https://www.youtube.com/@dotpotit"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaInstagram className="text-xl" />{" "}
              </a>{" "}
            </div>
          </div>
        </nav>

        <nav className="flex flex-col">
          <h2 className="footer-title">About</h2>
          <a
            href="https://dotpotit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            href="https://dotpotit.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Who we are{" "}
          </a>
          <a
            href="https://dotpotit.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
          <a href="https://dotpotit.com/apply">
            {" "}
           Jobs
          </a>
          <a
            href="https://dotpotit.com/services  "
            target="_blank"
            rel="noopener noreferrer"
          >
            Services
          </a>
          <a href="https://dotpotit.com/privacyPolicy" target="_blank"
            rel="noopener noreferrer">
            {" "}
           Privacy Policy
          </a>
          <a href="https://dotpotit.com/terms-conditions" target="_blank"
            rel="noopener noreferrer" >
            {" "}
           Terms & Conditions
          </a>
          <a href="https://dotpotit.com/white-paper" target="_blank"
            rel="noopener noreferrer">
            {" "}
           White Paper
          </a>
          <a href="https://dotpotit.com/faq" target="_blank"
            rel="noopener noreferrer">
            {" "}
           FAQ
          </a>
        </nav>
        <nav className="flex flex-col">
          <h2 className="footer-title">Tech Support</h2>
          <a
            href="https://dotpotit.com/web-development/landing-page "
            target="_blank"
            rel="noopener noreferrer"
            >
            Web Development
          </a>
          <a
            href="https://dotpotit.com/key-features/it-support/#cloud-computing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            IT Support
          </a>
          <a
            href="https://dotpotit.com/industries-we-serve/gaming/#unity-3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Game Development
          </a>
          <a
            href="https://dotpotit.com/key-features/mobile-app-development"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hybrid Apps
          </a>
          <a
            href="https://dotpotit.com/key-features/mobile-app-development/#ios"
            target="_blank"
            rel="noopener noreferrer"
          >
            iPhone Apps
          </a>
          <a
            href="https://dotpotit.com/key-features/ai-development/#object-recognition"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Development
          </a>
          <a
            href="https://dotpotit.com/key-features/mobile-app-development/#android"
            target="_blank"
            rel="noopener noreferrer"
          >
            Android apps
          </a>
          <a href="">Web apps</a>
          <a
            href="https://dotpotit.com/key-features/website-development"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web apps
          </a>
        </nav>
        <nav className="flex flex-col">
          <h2 className="footer-title">Contact Center</h2>
          <a
            href="https://dotpotit.com/web-development/landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mobile
          </a>
          <a
            href="https://dotpotit.com/key-features/it-support/#cloud-computing"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACD
          </a>
          <a
            href="https://dotpotit.com/key-features/contact-center-support/#cti"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTI
          </a>
          <a
            href="https://dotpotit.com/key-features/contact-center-support/#ivr"
            target="_blank"
            rel="noopener noreferrer"
          >
            IVR
          </a>
          <a
            href="https://dotpotit.com/key-features/contact-center-support/#email-marketing"
            target="_blank"
            rel="noopener noreferrer"
          >
            EmaiL Marketing
          </a>
          <a
            href="https://dotpotit.com/key-features/contact-center-support/#chat-support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Chat
          </a>
        </nav>
      </div>
      <div className="mt-4 flex justify-end  gap-4 pb-4 px-4">
        <p className="text-sm text-gray-200 gap-6">Member of</p>
        <Image src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705575986/zapm1pnj5vti2jizlzcf.jpg" alt="basis logo" width={150} height={65} className="max-w-[120px]" />
      </div>
      <p className="text-sm text-white mt-2 text-center">
        © 2023 Dotpot iT Ltd. , Inc. All rights reserved.
      </p>
      <div className="text-center pb-5 text-white"></div>
    </div>
  );
}

export default Footer;
