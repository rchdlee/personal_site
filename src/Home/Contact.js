import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { TailSpin } from "react-loader-spinner";
import classes from "./Contact.module.css";

const Contact = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const [messageSendStatus, setMessageSendStatus] = useState(null);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    setMessageSendStatus("sending");

    const messageContent = {
      from_name: nameInput.current.value,
      email_id: emailInput.current.value,
      message: messageInput.current.value,
    };

    console.log(messageContent);

    try {
      const data = await emailjs.send(
        "service_if4lu4c",
        "template_w4maq2m",
        messageContent,
        "kWqXPrf1Vfr8vVDxT"
      );
      console.log(data);
      setMessageSendStatus("success");
    } catch (error) {
      setMessageSendStatus("error");
      console.error(error);
    }

    // emailjs
    //   .send(
    //     "service_if4lu4c",
    //     "template_w4maq2m",
    //     {
    //       from_name: "testrich",
    //       email_id: "richardyubinlee@gmail.com",
    //       message: "hello world!",
    //     },
    //     "kWqXPrf1Vfr8vVDxT[remove]"
    //   )
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );
  };

  return (
    <div
      className={classes["contact-container"]}
      onSubmit={formSubmitHandler}
      id="contact"
    >
      <h3>I'd love to chat to chat with you!</h3>
      <form action="" className={classes["contact-form"]}>
        <div className={classes["small-input"]}>
          <label htmlFor="">Name</label>
          <input type="text" ref={nameInput} />
        </div>
        <div className={classes["small-input"]}>
          <label htmlFor="">Email</label>
          <input type="email" ref={emailInput} />
        </div>
        <div className={classes["large-input"]}>
          <label htmlFor="">Message</label>
          <textarea type="text" ref={messageInput} />
        </div>
        {messageSendStatus === null && (
          <div className={classes.button}>
            <button>Send!</button>
          </div>
        )}
        <div className={classes.centered}>
          {messageSendStatus === "sending" && (
            <TailSpin
              height="80"
              width="80"
              color="#445f49"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
          {messageSendStatus === "error" && (
            <p>There was an unexpected error. Please try again later!</p>
          )}
          {messageSendStatus === "success" && (
            <p>Message Sent! I'll respond back to you within 24h :-)</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
