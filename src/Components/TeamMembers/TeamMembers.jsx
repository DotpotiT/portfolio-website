import Image from "next/image";
import React, { useEffect } from "react";

const teamMembers = [
  {
    name: "Zakir Hossain",
    role: "CEO & Founder",
    imageSrc: "https://res.cloudinary.com/dgohi0iqm/image/upload/v1705147719/exzsd1nhnaz0z4fh9h9e.jpg",
  },
  {
    name: "Mizanur Rahman Sohan",
    role: "Lead Software Engineer",
    imageSrc: "https://res.cloudinary.com/dgohi0iqm/image/upload/v1705925251/sohan_ywcpk0.jpg",
  },
  {
    name: "Kamran Islam",
    role: "Sr. Software Engineer",
    imageSrc: "https://res.cloudinary.com/dgohi0iqm/image/upload/v1705927571/kamran_uew968.jpg",
  },
  {
    name: "Md Shakibul Islam",
    role: "Jr. Software Engineer",
    imageSrc: "https://res.cloudinary.com/dgohi0iqm/image/upload/v1705927744/MdShakibulIslam_fsin7i.png",
  },
  {
    name: "Maria Sultana",
    role: "Digital Marketing Manager",
    imageSrc: "https://res.cloudinary.com/dgohi0iqm/image/upload/v1705927373/maria_ke4boj.jpg",
  },
  {
    name: "Tushar Rayhan",
    role: "UI/UX Designer",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939534/fyp74qoxuhkxrg1skm6y.jpg",
  },
  {
    name: "Imtij Bin Aoual",
    role: "Mobile Application Developer",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939532/bg6ien9ri6rnbcyccflx.jpg",
  },
  {
    name: "Tawfik",
    role: "Mobile Application Developer",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706002585/tawfiq_grfhkg.jpg",
  },
  {
    name: "Amir Hossain",
    role: "DevOps Engineer",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939534/iufzdy4vljes4xoieblj.jpg",
  },
 
  {
    name: "Nahid Hasan",
    role: "Cybersecurity Expert",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939532/ub6vzq1m09ovlggj9cik.jpg",
  },
  {
    name: "Md Kawsar Ali",
    role: "Graphic Designer",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939532/thad2aswzkrectuwijod.jpg",
  },
  {
    name: "Chintan A Ghelani",
    role: "IT Sales Executive",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939532/ks5h4pil4izibfkbyitq.jpg",
  },
  {
    name: "Advocate Johurul Islam",
    role: "Legal Advisor",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939533/ystqis9obixxqkhh2u8c.jpg",
  },
  {
    name: "Ashfaq Tunna",
    role: "Office Admin",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939534/spksmwx4zstcjibfra5t.jpg",
  },

  {
    name: "Amber Qayyum",
    role: "Business Development",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939533/mnih63oej4cjciew1voe.jpg",
  },
  {
    name: "Saidul Islam",
    role: "Project Manager",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939534/qjt0fvcyhhreufnmwdqw.jpg",
  },
  {
    name: "Jannatul Ritu",
    role: "HR Manager",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939533/eaaebk8nuh5of68tm7rs.jpg",
  },
  {
    name: "Sonu Korashi",
    role: "Sr. Financial Officer",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706002338/sonu_yivptn.jpg",
  },
  {
    name: "Taief Hasan",
    role: "Software Quality Engineer",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939534/mozwgjdjxo6wns8qwagp.jpg",
  },
  {
    name: "Ruhul Amin",
    role: "Mobile Application Developer",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939533/tpglcccuxz3kegbni96k.jpg",
  },
  {
    name: "Ashraful Alim",
    role: "Cybersecurity Expert",
    imageSrc: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939534/hkcwbticnpconijkcy2h.jpg",
  },

];

function TeamMembers() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div className="mt-24">
      <h1
        className="text-2xl font-bold text-gray-400"
        style={{ textAlign: "center" }}
      >
        Our Team Members
      </h1>

      <div
        className="scroller max-w-screen-xl mx-auto mt-7"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__inner  flex flex-col justify-center items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col text-center">
              <div className="avatar ">
              <div className="rounded-full w-[24] h-[25vh] z-40" style={{ zIndex: 40}}>
  <Image
    width={250}
    height={200}
    loading="lazy"
    className="rounded-full"
    src={member.imageSrc}
    alt={`Team Member ${index + 1}`}
  />
</div>

</div>
           
            
              <h2 className="text-gray-300 font-bold  mt-3">{member.name}</h2>
              <p className="text-gray-300 font-semibold text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
