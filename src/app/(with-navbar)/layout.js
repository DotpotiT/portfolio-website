import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import React from 'react';

function WithNavbar({ children }) {
  const containerStyle = {
    backgroundImage: `url('https://robotiko.tokotema.com/wp-content/uploads/2023/05/Ellipse-1.png')`, // Replace 'path_to_your_image.jpg' with the actual path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Other background properties can be added as needed
  };

  return (
    <div className='bg-[#020505]' style={containerStyle}>
      <Navbar />
      <div>{children}</div>
      <Footer/>
    </div>
  );
}

export default WithNavbar;
