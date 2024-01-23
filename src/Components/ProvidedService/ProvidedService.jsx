import React from "react";
import { TbBrandWebflow ,TbGoGame } from "react-icons/tb";
import { GiArtificialHive,GiDigitalTrace } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineSupportAgent,MdConnectWithoutContact } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
function ProvidedService() {
  return (
    <div className="max-w-7xl mx-auto mt-6 p-1">
      <h2 className="text-center text-2xl font-bold text-gray-200 my-8 mt-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-8 gap-5">
        <a href="https://dotpotit.com/web-development/landing-pag" target="_blank" className="card w-[42vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200">
          <div className="text-white text-7xl -mt-[3px] max-w-xl mx-auto">
            <TbBrandWebflow />
          </div>
          <div  className="card-body transform -translate-y-4 items-center text-center">
            <h2 className="card-title  text-gray-300">Web Development</h2>
            <p
              className="text-gray-300 text-sm"
              style={{ whiteSpace: "pre-line", textAlign: "justify" }}
            >
              Dotpot iT specializes in crafting stunning and mobile-friendly
              websites for all kinds of businesses using cutting-edge
              technologies. Whether you run a niche business or a large
              enterprise, we create custom websites that meet your unique needs.
              Our portfolio showcases successful projects across diverse
              industries, demonstrating our expertise. With a commitment to best
              practices,we not only design but also provide ongoing support and
              maintenance bolstered by SEO strategies for smooth, secure
              operations Elevate your online presence with Dotpot iT - your
              trusted partner for top-notch web solutions.
            </p>
          </div>
        </a>
        <a href="https://dotpotit.com/key-features/contact-center-support/#mobile-app" target="_blank" className="card w-[42vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200">
          <TbGoGame className="text-white text-7xl pt-3 max-w-xl mx-auto" />

          <div className="card-body transform -translate-y-4 items-center text-center">
            <h2 className="card-title text-gray-300">Mobile App  Development </h2>
            <p
              className="text-gray-300  text-sm "
              style={{ whiteSpace: "pre-line", textAlign: "justify" }}
            >
              Dotpot iT specializes in mobile application development, bringing
              your ideas to life in the palm of your users' hands. Our seasoned
              team designs and creates innovative, user-friendly apps tailored
              to meet your specific goals. Whether you're launching a startup or
              expanding your digital presence, we craft mobile solutions that
              captivate and engage your audience. With a focus on the latest
              technologies and seamless user experiences, Dotpot iT is your
              partner for turning mobile aspirations into reality.
            </p>
          </div>
        </a>
        <a href="https://dotpotit.com/web-development/landing-pag" target="_blank" className="card w-[42vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200">
          <GrCloudSoftware className="text-white text-7xl pt-3 max-w-xl mx-auto" />

          <div className="card-body transform -translate-y-4 items-center text-center">
            <h2 className="card-title text-gray-300">Software Development</h2>
            <p
              className="text-gray-300  text-sm "
              style={{ whiteSpace: "pre-line", textAlign: "justify" }}
            >
              Dotpot iT leads the way in software development, crafting
              solutions that redefine possibilities. With a focus on innovation,
              we create custom software tailored to your business requirements.
              Our skilled team utilizes the latest technologies to deliver
              robust, scalable, and user-friendly applications. From concept to
              implementation, we prioritize efficiency and excellence. Explore
              our portfolio of successful projects spanning diverse industries,
              showcasing our commitment to driving digital transformation.
              Choose Dotpot iT for software development that empowers your
              business with cutting-edge solutions and
              technological advancement.
            </p>
          </div>
        </a>

        <a href="https://dotpotit.com/key-features/ai-development/#object-recognition" target="_blank" className="card w-[42vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200">
          <GiArtificialHive className="text-white text-7xl pt-3 max-w-xl mx-auto" />

          <div className="card-body transform -translate-y-4 items-center text-center">
            <h2 className="card-title text-gray-300">AI Development</h2>
            <p
              className="text-gray-300  text-sm "
              style={{ whiteSpace: "pre-line", textAlign: "justify" }}
            >
              At Dotpot iT, we pioneer AI development, crafting solutions that
              revolutionize how businesses operate. Our seasoned team leverages
              state-of-the-art technologies to create intelligent systems that
              automate tasks, improve decision-making, and drive innovation.
              Whether you're seeking machine learning applications, natural
              language processing, or predictive analytics, our tailored AI
              solutions are designed to meet your unique objectives. Join us in
              embracing the future of technology, where Dotpot iT is your
              dedicated partner for unlocking the full potential of AI.
            </p>
          </div>
        </a>

        <a href="https://dotpotit.com/" target="_blank" className="card w-[40vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200 ">
          <FaPencilRuler className="text-white text-7xl pt-3 max-w-xl mx-auto" />

          <div className="card-body transform -translate-y-4 items-center text-center">
            <h2 className="card-title text-gray-300">UX/UI Design</h2>
            <p
              className="text-gray-300  text-sm "
              style={{ whiteSpace: "pre-line", textAlign: "justify" }}
            >
              Transform user experiences with our exceptional UI/UX services. At
              [Your Company Name], we specialize in crafting intuitive
              interfaces that not only captivate but also delight users. Our
              dedicated team of designers focuses on optimizing usability and
              enhancing engagement, ensuring that every interaction with your
              digital platforms is a seamless and enjoyable experience. We go
              beyond aesthetics, understanding that a well-designed user
              interface is a key element in elevating your digital presence. By
              combining creativity with user-centric design principles, we
              create interfaces that not only look visually appealing but also
              function seamlessly across device
            </p>
          </div>
        </a>
        <a href="https://dotpotit.com/industries-we-serve/gaming/#unity-3D" target="_blank" className="card w-[42vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200">
          <MdAnimation className="text-white text-7xl pt-3 max-w-xl mx-auto" />

          <div className="card-body transform -translate-y-4 items-center text-center">
  <h2 className="card-title text-gray-300">3D Animation</h2>
  <p className="text-gray-300 text-sm" style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
    Explore the world of immersive storytelling and visual excellence with Dotpot iT's 3D Animation services. Our expertise in 3D animation brings creativity to life, delivering captivating visual experiences that go beyond traditional communication.

    At Dotpot iT, we harness the power of cutting-edge technology to elevate your projects. our 3D animation services promise to engage and leave a lasting impact. Join us in the realm of limitless possibilities, where every frame tells a unique and compelling story.
  </p>
</div>

        </a>
      
       

     
        <a href="https://dotpotit.com/" target="_blank" className="card w-[42vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200">
          <GiDigitalTrace className="text-white text-7xl pt-3 max-w-xl mx-auto" />

          <div className="card-body transform -translate-y-4 items-center text-center">
            <h2 className="card-title text-gray-300">Digital Marketing</h2>
            <p
              className="text-gray-300  text-sm "
              style={{ whiteSpace: "pre-line", textAlign: "justify" }}
            >
              Revolutionize your online presence with Dotpot iT's Digital
              Marketing prowess. Specializing in SEO, SMM, and PPC services, we
              craft strategic solutions to amplify your brand's impact. Our
              tailored approach ensures enhanced visibility in the digital
              landscape, from optimizing search rankings to managing social
              media and executing targeted PPC campaigns. Partner with Dotpot iT
              for compelling content, data-driven strategies, and a dynamic
              online presence.
            </p>
          </div>
        </a>
        <a href="https://dotpotit.com/contact" target="_blank" className="card w-[42vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200">
          <MdConnectWithoutContact className="text-white text-7xl pt-3 max-w-xl mx-auto" />

          <div className="card-body transform -translate-y-4 items-center text-center">
            <h2 className="card-title text-gray-300">Contact Center</h2>
            <p
              className="text-gray-300  text-sm "
              style={{ whiteSpace: "pre-line", textAlign: "justify" }}
            >
              At Dotpot iT, our Contact Center services redefine communication
              excellence. Seamlessly engage customers with multi-channel
              support, efficient call handling, and integrated email marketing.
              Elevate interactions, optimize operations, and ensure outstanding
              service delivery. Dotpot iT is your dependable partner for
              creating a responsive and customer-centric contact center
              experience – where communication meets excellence.
            </p>
          </div>
        </a>
        <a href="https://dotpotit.com/key-features/it-support/#cloud-computing" target="_blank" className="card w-[42vh] md:w-[48vh] mx-auto lg:w-96 bg-gray-800 shadow-xl border-t-2 border-t-rose-200">
          <MdOutlineSupportAgent className="text-white text-7xl pt-3 max-w-xl mx-auto" />

          <div className="card-body transform -translate-y-4 items-center text-center">
            <h2 className="card-title text-gray-300">IT Support</h2>
            <p
              className="text-gray-300  text-sm "
              style={{ whiteSpace: "pre-line", textAlign: "justify" }}
            >
              Dotpot iT provides redefined IT support as a tailored and seamless
              experience crafted to meet your business needs. Our expert team is
              dedicated to delivering responsive solutions, covering everything
              from troubleshooting to system optimization, ensuring your IT
              infrastructure operates effortlessly. Whether you're a startup or
              an established enterprise, Dotpot iT guarantees personalized
              support, allowing you to navigate the complexities of technology
              with confidence. Our commitment extends to cybersecurity,
              providing robust protection for your digital assets. Choose Dotpot
              iT – where your technology challenges find expert solutions.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProvidedService;
