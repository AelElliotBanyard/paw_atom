import React from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
          console.log('message send')
          alert('message send')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h1>Kontakt</h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <div>
              <div>
                <label>Name</label>
                <input type="text" name="user_name" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>
            </div>
            <div>
              <label>Nachricht</label>
              <textarea name="message" />
            </div>
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
