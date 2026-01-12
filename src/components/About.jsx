import UserClasss from "./UserClass";

const About = () => {
  return (
    <div className="p-6">
      <h1 className="bold ">About Us</h1>
      <p>This is a food delivery application built using React.</p>
      <UserClasss name={"PrathamSharma"} location={"delhi"} />
    </div>
  );
};

export default About;
