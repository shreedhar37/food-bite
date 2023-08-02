import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react webseries</h2>
      {/* <User name={"Shreedhar in functional based component"} /> */}
      <UserClass name={"Shreedhar in class based component"} />
    </div>
  );
};

export default About;
