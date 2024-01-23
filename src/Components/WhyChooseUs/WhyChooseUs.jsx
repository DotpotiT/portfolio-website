import React from 'react'

function WhyChooseUs() {
  return (
    <div className='mb-6 lg:mb-16 text-gray-400'>
      <h2 className='text-2xl font-bold text-center text-gray-400 mb-11 '>Why Choose Us?</h2>
      <div className='flex flex-col md:flex-row lg:flex-row justify-between max-w-7xl mx-auto gap-4'>
    <div className="card w-full lg:w-96  shadow-sm">
  <figure className="px-10 pt-10">
    <img src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705999576/Icon_3_q7hno9.png" alt="Expert Team" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Expert Team</h2>
    <p> Our team comprises skilled professionals with extensive experience in the IT industry.
</p>
 
  </div>
</div>
    <div className="card w-full lg:w-96  shadow-xl ">
  <figure className="px-10 pt-10">
    <img src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705999576/1_NOIcon_grs8sd.png" alt="Client centric approach" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Client Centric Approach</h2>
    <p>We prioritize understanding our clients' needs and delivering solutions that exceed expectations.
</p>
 
  </div>
</div>
    <div className="card w-full lg:w-96  shadow-sm">
  <figure className="px-10 pt-10">
    <img src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705999576/Icon_3_q7hno9.png" alt="Innovation" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Innovation</h2>
    <p>We stay at the forefront of technology trends, providing innovative solutions to keep our clients ahead in their industries.

</p>
 
  </div>
</div>
    
    </div>
    </div>
  )
}

export default WhyChooseUs