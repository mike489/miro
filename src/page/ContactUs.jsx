// import { useRef, useState } from "react";
// import NavBar1 from "../Components/NavBar2";
// import emailjs from "emailjs-com";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Bounce } from "react-toastify";

const ContactUs = () => {
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const formRef = useRef(null);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     // Validate form data (you can add more validation as per your requirements)

  //     // Send email using EmailJS
  //     emailjs
  //       .sendForm(
  //         "service_cdms8wh",
  //         "template_6c38mvr",
  //         formRef.current,
  //         "z7nl6Dwp7iQLzl-qv"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           console.log("Email sent successfully!");
  //           toast.success("Successful Summited", {
  //             position: "top-right",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //             transition: Bounce,
  //           });
  //           setEmail("");
  //           setSubject("");
  //           setMessage("");
  //         },
  //         (error) => {
  //           console.error(error.text);
  //           console.log(email, message);
  //           //   toast.error("Oops! Something went wrong. Please try again later.", {
  //           //     position: "top-right",
  //           //     autoClose: 3000,
  //           //     hideProgressBar: false,
  //           //     closeOnClick: true,
  //           //     pauseOnHover: true,
  //           //     draggable: true,
  //           //     progress: undefined,
  //           //     theme: "light",
  //           //     transition: Bounce,
  //           //   });
  //         }
  //       );
  //   };

  return (
    <div className="min-h-screen bg-cover bg-inherit">
      <section className="bg-white font-primary">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#2c8595] font-primary">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-semibold text-center text-gray-500 sm:text-xl">
            For more information about this project;
          </p>
          <form
            action="#"
            className="space-y-8"
            // onSubmit={handleSubmit}
            // ref={formRef}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="user_name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
                // value={subject}
                // onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
                // value={message}
                name="message"
                // onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg hover:bg-[#2c8595] bg-[#166370] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              //   onClick={(e) => handleSubmit(e)}
            >
              {status === "sending" ? "Sending..." : " Send message"}
            </button>
          </form>
        </div>
        {/* Display subscription status or error message */}
        {/* {status === "error" && (
          <p className="text-red-500 font-medium">Error: {message}</p>
        )}
        {status === "success" && (
          <p className="text-white text-xl">Thank you for subscribing!</p>
        )} */}
      </section>
      {/* <ToastContainer /> */}
    </div>
  );
};
export default ContactUs;
