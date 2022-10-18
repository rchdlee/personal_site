import classes from "./Contact.module.css";

const Contact = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("form submitted!");
  };

  return (
    <div className={classes["contact-container"]} onSubmit={formSubmitHandler}>
      <h3>I'd love to chat to chat with you!</h3>
      <form action="" className={classes["contact-form"]}>
        <div className={classes["small-input"]}>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className={classes["small-input"]}>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className={classes["large-input"]}>
          <label htmlFor="">Message</label>
          <textarea type="text" />
        </div>
        <div className={classes.button}>
          <button>Send!</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
