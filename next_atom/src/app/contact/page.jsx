"use client";
import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if (username === "" || email === "" || message === "") {
      toast.error("Bitte fülle alle Felder aus!", {
        theme: "dark",
      });
    } else {
      emailjs
        .sendForm(
          "service_87i9r4l",
          "template_uxc34a8",
          form.current,
          "Bajg88TbrAuaacBDa"
        )
        .then((result) => {
          console.log(result.text);
          console.log("message send");
          toast.success("Nachricht gesendet!", {
            theme: "dark",
          });
        })
        .catch((error) => {
          console.log(error.text);
          toast.error("Etwas ist schief gelaufen!", {
            theme: "dark",
          });
        })
        .finally(() => {
          setEmail("");
          setUsername("");
          setMessage("");
          form.current.reset();
        });
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        src="/img/explosion.jpg"
        className=" h-screen w-screen object-cover p-0 m-0"
      />
      <div className="flex w-5/6 h-5/6 self-center bg-black bg-opacity-50 justify-center items-center gap-8 flex-col backdrop-blur-md rounded text-white shadow-[#CB5329]  shadow-lg absolute">
        <p className="md:text-6xl text-4xl">Kontakt</p>
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-10"
          >
            <div className="flex md:flex-row md:gap-2 flex-col gap-4 ">
              <input
                className=" bg-transparent border-b-2 border-white hover:border-[#CB5329] focus:outline-none placeholder:text-gray-300"
                placeholder="Name"
                type="text"
                name="user_name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className=" bg-transparent border-b-2 border-white hover:border-[#CB5329] focus:outline-none placeholder:text-gray-300"
                placeholder="Email"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              className=" bg-transparent border-b-2 border-white hover:border-[#CB5329] focus:outline-none placeholder:text-gray-300"
              placeholder="Nachricht"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              value="Send"
              className="w-full text-white bg-gradient-to-r from-orange-400 via-orange-600  to-orange-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-5 mb-5"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Contact;
