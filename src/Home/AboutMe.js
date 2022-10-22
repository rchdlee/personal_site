import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={classes["aboutme_container"]} id="aboutme">
      <h2>Hi, it's me again!</h2>
      <p>
        After playing the violin my entire childhood, I felt pretty lost when I
        entered college. After constantly switching majors, I decided to take a
        gap year after the conclusion of my junior fall semester.
      </p>
      <p>
        At the beginning of 2022, I started teaching myself to code - At the
        same time, I also explored the blockchain/web3 space, met many amazing
        people, and worked at a startup specializing in GPT-3!
      </p>
      {/* <p>
        As a lover of people and the human condition, combined with my time
        spent around computers and digital communities, I've grown to love
        exploring the relationships and identities that we have online, whether
        it's user-to-user, user-to-application, user-to-corporation, or
        user-to-world.
      </p> */}
      <p>
        In my free time, I love going to my favorite rock climbing gym,
        tinkering with my (small but growing!) mechanical keyboard collection,
        and listening to Lex Fridman podcasts!
      </p>
    </div>
  );
};

export default AboutMe;
