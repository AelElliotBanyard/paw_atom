import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
        toast.success(
          "Nachricht gesendet!",
          {
            theme: "dark",
          },
          (error) => {
            console.log(error.text);
            toast.error("Etwas ist schief gelaufen!", {
              theme: "dark",
            });
          }
        );
      })
      .finally(() => {
        form.current.reset();
      });
  };
  return (
    <div className="flex flex-center justify-center items-center gap-8 flex-col bg-[#5c5c5cae] backdrop-blur-md rounded w-1/3 text-white">
      <h1 className="text-3xl">Kontakt</h1>
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10">
          <div className="flex flex-row gap-2">
            <input
              className=" bg-transparent border-b-2 border-white hover:border-purple-500 focus:outline-none"
              placeholder="Name"
              type="text"
              name="user_name"
            />
            <input
              className=" bg-transparent border-b-2 border-white hover:border-purple-500 focus:outline-none"
              placeholder="Email"
              type="email"
              name="user_email"
            />
          </div>
          <textarea
            className=" bg-transparent border-b-2 border-white hover:border-purple-500 focus:outline-none"
            placeholder="Nachricht"
            name="message"
          />

          <button type="submit" value="Send" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Senden
          </button>
        </form>
      </div>
      <ToastContainer className="absolute left-0 top-0" />
    </div>
  );
};

export default Contact;
