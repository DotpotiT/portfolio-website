import React from 'react';

const services = [
  'Web Development',
  'Software Development',
  'Mobile Application',
  'UI/UX Design',
  'Digital Marketing',
  'AI Development',
  'Contact Center',
];

function Services() {
  const containerStyle = {
    backgroundImage: `url('https://tech-ai.vercel.app/_next/static/media/sponsor-bg.b182ce21.png')`, // Replace 'path_to_your_image.jpg' with the actual path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // You can add more styles like backgroundRepeat, etc., as needed
  };

  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 overflow-hidden  lg:p-9 px-1 lg:px-16  w-full lg:max-w-6xl mx-auto gap-1 lg:gap-4 transform  lg:-translate-y-32 py-3 ' style={containerStyle}>
      {services.map((service, index) => (
        <div key={index} className='   rounded-lg lg:px-5 '>
          <p  className='button-85 max-w-full' role='button'>{service}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
