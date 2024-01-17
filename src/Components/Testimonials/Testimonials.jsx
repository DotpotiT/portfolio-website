import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function Testimonials() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const testimonialData = [
    {
      backgroundImage:
        'url("https://robotiko.tokotema.com/wp-content/uploads/2023/05/Ellipse-1.png")',
      backgroundColor: "#020505",
      feedback:
        "I can't say enough about the excellent work DotpotiT did on our website. They transformed it from below-average to appealing and informative website.",
      author: "Mr.Kamran Hossain",
      location: "Nikunjo, Dhaka",
      avatarImages:
        "https://res.cloudinary.com/dgohi0iqm/image/upload/v1704530592/kxnhvzupy7hwcyx6dpki.jpg",
    },
    {
      backgroundImage:
        'url("https://robotiko.tokotema.com/wp-content/uploads/2023/05/Ellipse-1.png")',
      backgroundColor: "#020505",
      feedback:
        "I wanted to take a moment to thank DotpotiT for the services your team has provided. Your team has been a pleasure to work with, professional and timely. Job well done.",
      author: "Harry Jhon",
      location: "United Kingdom",
      avatarImages:
        "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg",
    },
    {
      backgroundImage:
        'url("https://robotiko.tokotema.com/wp-content/uploads/2023/05/Ellipse-1.png")',
      backgroundColor: "#020505",
      feedback:
        "We have been working with DotpotiT team for over 2 years now. I must say we have come a long way together and all along their team has been flexible to our ad-hoc requests.",
      author: "Richardson Pjel",
      location: "United Kingdom",
      avatarImages:
        "https://img.freepik.com/free-photo/smiling-man-white-shirt-typing-text-message-scrolling-feed-social-network-using-smartphone-gray_171337-634.jpg",
    },
    // Add more testimonial data objects here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % testimonialData.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);

    const currentTestimonial = testimonialData[currentImageIndex];
    const currentAvatar = currentTestimonial.avatarImages;

    progressContent.current.innerHTML = `
      <div class="avatar">
        <div class="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Image width={20} height={20} className="rounded-full" src="${currentAvatar}" alt="User Avatar" />
        </div>
      </div>
    `;
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-2 md:gap-4 lg:gap-9 py-6 px-2">
      <div className=" px-3">
     
        <div className="contents absolute z-10">
          <a href="#">
            <Image
              width={400}
              height={400} loading="lazy"
              className="rounded-full "
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705144832/aj1omaubfqj5kecvmeza.jpg"
              alt="Clients Review- Dotpot iT"
            />
          </a>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="max-w-[41vh] md:max-w-[48vh] lg:max-w-3xl "
        >
          {testimonialData.map((testimonial, index) => (
  <SwiperSlide
    key={index}
    className="rounded-lg"
    style={{
      backgroundImage: testimonial.backgroundImage,
      backgroundSize: "cover",
      backgroundColor: testimonial.backgroundColor,
    }}
  >
    <div className="text-start p-3 lg:p-16">
      <h2 className="text-blue-400">Testimonials</h2>
      <h1 className="text-2xl py-2 text-gray-300">
        Our Client's Feedback
      </h1>
      <p className="w-[90%] text-gray-300">{testimonial.feedback}</p>
      <div className="pt-16">
        <p className="text-gray-300 font-bold">{testimonial.author}</p>
        <p className="text-gray-300">{testimonial.location}</p>
      </div>
    </div>
  </SwiperSlide>
))}
          <div
            className="autoplay-progress rounded-full w-20 h-20"
            slot="container-end"
            style={{ overflow: "hidden", borderRadius: "50%" }}
          >
            <svg
              viewBox="0 0 48 48"
              ref={progressCircle}
              style={{ borderRadius: "50%" }}
            >
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
