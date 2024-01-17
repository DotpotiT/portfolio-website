import { useState } from "react";

// import Aos from 'aos';
// import 'aos/dist/aos.css';
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_x3qy2wt";
    const templateId = "template_gs0oyfj";
    const publicKey = "GEvERIK7UTIaKvYda";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Dotpot iT",
      message: message,
    };

    try {
      // Attempt to send the email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200 && response.text === "OK") {
        // Display a success toast notification upon successful sending
        toast.success("Message sent successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });

        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Display an error toast if the response status is not 'OK'
        toast.error("Error sending message. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Display an error toast if an exception occurs during sending
      toast.error("Error sending message. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="mx-auto lg:mt-20">
      <div className="mt-10 md:w-full mx-auto my-10 relative">
        <ToastContainer />

        <div
          className="py-16 h-[65vh] lg:h-[55vh]  p-2"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dgohi0iqm/image/upload/v1705159069/ec85z8mt3tzxcbr1rvgn.png")',
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: "0.65",
          }}
        >
          <div className=" max-w-3xl mx-auto ">
            <h1 className="text-center text-xl lg:text-3xl text-white py-2 lg:py-5">
              Contact Us
            </h1>
            <div className="border p-9 border-white bg-gray-800 rounded ">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-3 ">
                  <div className="form-control md:w-1/2 w-full my-2">
                    <input
                      type="text"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="bg-transparent  border text-white  rounded-md   p-2"
                    />
                  </div>
                  <div className="form-control md:w-1/2 w-full my-2">
                    <input
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Your Email"
                      className="bg-transparent border text-[#fff] rounded-md p-2"
                    />
                  </div>
                </div>
                <div className="form-control w-full my-2 lg:my-5">
                  <textarea
                    cols="30"
                    rows="3"
                    value={message}
                    placeholder="Write Us A Massage"
                    maxLength={200}
                    className=" p-2 border  text-white rounded-md   bg-transparent"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className="flex justify-center mt-3 lg:mt-6">
                  <input
                    type="submit"
                    className="btn py-3 px-6 rounded-lg border-none bg-blue-600 w-full font-bold text-white hover:bg-blue-700"
                    style={{ outline: "none", border: "none" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
