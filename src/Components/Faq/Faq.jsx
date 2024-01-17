import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const faqs = [
    {
      question: " What services does your software company offer?",
      answer:
        "Our software company specializes in providing a range of services including custom software development, mobile app development, web development,UI/UX design, AI development, IT support, and Digital Marketing.",
    },
    {
      question: "What industries do you cater to?",
      answer:
        "We have experience working with clients across various industries, including healthcare, finance, e-commerce, education, and more. Our versatile team can adapt to the unique needs of different sectors.",
    },
    {
      question: "Can you provide examples of projects you have worked on?",
      answer:
        "We understand that project requirements may evolve. We have a flexible approach to accommodate changes in project scope. We work closely with our clients to assess the impact on timelines and budgets and adjust accordingly.",
    },
    {
      question: "How do you ensure the security of the software you develop?",
      answer:
        "Security is a top priority for us. We follow industry best practices, conduct regular security audits, and implement robust encryption measures to safeguard your data and ensure the security of the software we deliver.",
    },
  ];
  const faqs1 = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "Our team is well-versed in a wide range of technologies, including but not limited to Java, Python, JavaScript, React, Angular, Swift, and more. We stay updated with the latest industry trends to provide cutting-edge solutions.",
    },
    {
      question: "How do you handle project timelines and deadlines?",
      answer:
        "We understand the importance of timely delivery. Our project management processes are designed to ensure efficient and timely completion. We provide realistic timelines and keep our clients informed about the progress throughout the development lifecycle.",
    },
    {
      question:
        "How do you handle changes in project scope during development?",
      answer:
        "Communication is key to a successful partnership. We maintain transparent and regular communication with our clients through various channels, including meetings, emails, and project management tools. We also provide regular updates to keep clients informed about the projects status.",
    },
    {
      question:
        "What support and maintenance services do you offer post-launch?",
      answer:
        "Our commitment doesn't end with the launch of the software. We offer ongoing support and maintenance services to address any issues, implement updates, and ensure the continued optimal performance of your software.",
    },
    // Add more unique FAQ items as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const toggleAccordion2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };
  return (
    <div className="max-w-7xl mx-auto py-16 px-2">
      <h2 className="text-2xl text-orange-300/60 font-bold mb-4">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-4 ">
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center bg-gray-600 text-gray-300 p-4 cursor-pointer rounded"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-semibold ">{faq.question}</h3>
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="bg-gray-700 text-gray-200 p-4 rounded">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full">
          {faqs1.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center bg-gray-600 text-gray-300 p-4 cursor-pointer rounded"
                onClick={() => toggleAccordion2(index)}
              >
                <h3 className="font-semibold ">{faq.question}</h3>
                <span className="text-2xl">
                  {activeIndex2 === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex2 === index && (
                <div className="bg-gray-700 text-gray-200 p-4 rounded">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
