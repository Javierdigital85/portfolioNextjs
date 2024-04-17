"use client";
import React, { useState } from "react";
import Github from "../../public/github.svg";
import LinkedIn from "../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.subject || !data.message) {
      setEmailError(true);
      return;
    }

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Message sent");
      setData({
        email: "",
        subject: "",
        message: "",
      });

      setEmailSubmitted(true);
    } else {
      console.log("no ha funcionado");
    }
  };

  return (
    <>
      <h1
        className="text-white mt-20 text-4xl text-center font-bold"
        id="contact"
      >
        Contact
      </h1>
      <section className="grid md:grid-cols-2 my-12 md:my-12 py-2 gap-4">
        {/* <h1 className="text-white">Hola</h1> */}
        <div>
          <h5 className="text-xl font-bold text-white my-2 mt-20">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, and my inbox is
            always open. Whether you have any questions or just to say hi.
          </p>
          <div className="socials flex flex-row gap-4">
            <Link href="https://github.com/Javierdigital85" target="_blank">
              <Image
                src={Github}
                className="h-10 w-10 bg-white rounded-full hover:h-11 hover:w-11 hover:bg-sky-400"
                alt="Github Icon"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lorenzojaviercolodro/"
              target="_blank"
            >
              <Image
                src={LinkedIn}
                className="h-10 w-10 bg-white rounded hover:h-11 hover:w-11 hover:bg-sky-400"
                alt="LinkedIn Icon"
              />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col mt-20" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={data.email}
                onChange={handleInputChange}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                type="email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                value={data.subject}
                onChange={handleInputChange}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Say hello to Lorenzo Javier!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={handleInputChange}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully
              </p>
            ) : (
              <p className="text-gray-500 text-sm mt-2">
                Please, fill out the fields.
              </p>
            )}
            {emailError && (
              <p className="text-red-500 text-sm mt-2">Datos incorrectos</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default EmailSection;

// const [data, setData] = useState({
//   email: "",
//   subject: "",
//   message: "",
// });

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const response = await fetch("/api/send", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
/////////////////////////////////////////////////////////
// const JSONdata = JSON.stringify(data);
// const endpoint = "/api/send";

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSONdata,
// };

// const response = await fetch(endpoint, options);
// const resData = await response.json();
// console.log(response, "esto tiene response");

// console.log(emailSubmitted, "llega!!");

// const [email, setEmail] = useState("");
// const [subject, setSubject] = useState("");
// const [message, setMessage] = useState("");

// const handleEmail = (e) => {
//   setEmail(e.target.value);
// };
// const handleSubject = (e) => {
//   setSubject(e.target.value);
// };
// const handleMessage = (e) => {
//   setMessage(e.target.value);
// };

/////////////////////////////////////
// const [subject, setSubject] = useState("");
// const [message, setMessage] = useState("");

// const handleEmail = (e) => {
//   setEmail(e.target.value);
// };
// const handleSubject = (e) => {
//   setSubject(e.target.value);
// };
// const handleMessage = (e) => {
//   setMessage(e.target.value);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   axios
//     .post("/api/send", {
//       email: email,
//       subject: subject,
//       message: message,
//     })
//     .then((res) => res.data)
//     .catch((error) => console.log("No se puede enviar", error));
// };
