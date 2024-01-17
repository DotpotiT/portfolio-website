import React from "react";

function MissionVision() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 max-w-6xl mx-auto transform -translate-y-20">
      <div className="flex flex-col w-full p-4 gap-4">
        <div>
          <h2 className="text-xl text-blue-300 pt-3">Our Mission</h2>
          <p className="text-gray-400">
            Being a professional software development, web development and
            mobile application development company, our mission is to provide
            customer-centric, result-oriented, cost-competitive innovative &
            functional IT Solutions to our valuable global clients.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-blue-300">Our Vision</h2>
          <p className="text-gray-400">
            Our vision is to be a well-established software development company
            to serve the SMEs, Enterprises and Startups. We know that Customer’s
            growth is our growth, so we commit our customers to help in
            achieving their business goals. We believe in work with accuracy and
            best quality. In the IT sector, we wish to be recognized as the
            reliable, innovative and user-friendly software service provider.
          </p>
        </div>
      </div>
      <div className="px-2">
        <div style={{ position: "relative", width: "520px", height: "240px" ,display:"flex", justifyContent:"center", }}>
          <video loop="1" autoPlay muted width="100%" height="80%" className="w-[42vh] lg:w-full" >
            <source
              src="https://res.cloudinary.com/dzqxgr4lr/video/upload/v1704705755/xwhhxprltqz8uv5wzpas.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="w-[42vh] lg:w-[52vh]"
            style={{
              position: "absolute",
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "10px",
              textAlign: "center",
              margin:"8%",
            }}
          >
           Our Mission & Vision
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
