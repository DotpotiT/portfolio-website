  import React from 'react'
  import { FaFacebook, FaLink, FaLinkedin, FaLocationArrow, FaMobile, FaPhone, FaTwitter, FaVoicemail, FaWhatsapp } from 'react-icons/fa6'
  import { AiOutlineMail } from "react-icons/ai";
  function Footer() {
    return (
      <div className='mt-12'>
     <footer className="footer p-10 text-white px-2 lg:px-[120px] bg-cover bg-center" style={{ background: `url('https://loading.io/assets/img/c/bg/cloud-dark.svg') no-repeat center/cover`, opacity: 1, visibility: 'visible' }}>

  <nav className='flex flex-col'>
      <header className="footer-title">Services</header> 
      <a href='https://dotpotit.com/web-development/landing-page' className="link link-hover">Web Development</a>
      <a href='https://dotpotit.com/key-features/it-support/#cloud-computing' className="link link-hover">IT Support</a>
      <a className="link link-hover">Marketing</a>
    </nav> 
    <nav className='flex flex-col'>
      <header className="footer-title">Company</header> 
      <a href='https://dotpotit.com' className="link link-hover">Home</a>
      <a href='https://dotpotit.com/about' className="link link-hover">About us</a>
      <a href='https://dotpotit.com/contact' className="link link-hover">Contact</a>
    </nav> 
    <nav>
      <header className="footer-title">Email</header> 
      <div className=' flex flex-col gap-3 '>
      
              <div>
            
              <a href="mailto:help@dotpotit.com">help@dotpotit.com</a> <br />
  <a href="mailto:hr@dotpotit.com">hr@dotpotit.com</a> <br />

  <a href="mailto:marketing@dotpotit.com">marketing@dotpotit.com</a>

              </div>
            
          </div>
    </nav>
  
    <nav>
      <header className="footer-title">Contact</header> 
      <div className=' flex flex-col gap-3 '>
      
              <div>
            
                      
              <a href='https://dotpotit.com' className='flex gap-2 items-center'><FaLink/> www.dotpotit.com</a>
              <p className='flex gap-2 items-center'><FaMobile/> +44 7441 427459  </p>
              <p className='flex gap-2 items-center'><FaMobile/> +880 1817 176192 </p>
            
            

              </div>
              <div> <p className='flex gap-2 items-center'> <FaLocationArrow/> 71-75 Shelton St,

  London WC2H 9JQ,

  United Kingdom </p>
        <p className='flex gap-2 items-center'> <FaLocationArrow/> House-1 Road-3 ,

  Block-A Mirpur-10 ,

  Dhaka, Bangladesh
                          </p>
          
        </div>
          </div>
    </nav>
  
    
  </footer> 
  <footer className="footer  py-4 border-t  text-white px-2 lg:px-[120px] border-base-300">
    <aside className="items-center grid-flow-row">
        <h1 className="w-[25vh] lg:w-[250px] font-bold transform translate-y-5"><img src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704543228/vkahrznyuobgcnmnltq9.png" alt="" /></h1>
      <h4 className='transform translate-x-16 -translate-y-4'>Providing reliable tech since 2019</h4>
    </aside> 
    <nav className="md:place-self-center md:justify-self-end">
      <div className="grid grid-flow-col gap-4">
      
      <a href="mailto:help@dotpotit.com"> <AiOutlineMail className='text-2xl'/></a>
      <a href="https://api.whatsapp.com/send/?phone=%2B8801817176192&text&type=phone_number&app_absent=0"><FaWhatsapp className='text-2xl'/></a>
      <a href="https://www.linkedin.com/company/dotpotit "> <FaLinkedin className='text-2xl'/> </a> </div>
  </nav>
  </footer>


      </div>
    )
  }

  export default Footer