import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
          alert("message send");
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        form.current.reset();
      });
  };
  return (
    <div className="flex flex-center justify-center items-center gap-8 flex-col bg-[#5c5c5cae] backdrop-blur-md rounded w-1/3 text-white">
      <h1 className="text-3xl">Kontakt</h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-2">
                <input className=" bg-transparent border-b-2 border-white hover:border-blue-500 focus:outline-none" placeholder="Name" type="text" name="user_name"/>
                <input className=" bg-transparent border-b-2 border-white hover:border-blue-500 focus:outline-none" placeholder="Email" type="email" name="user_email" />
            </div>
              <textarea className=" bg-transparent border-b-2 border-white hover:border-blue-500 focus:outline-none" placeholder="Nachricht" name="message" />
          </div>
          <button type="submit" value="Send">
            Senden
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
