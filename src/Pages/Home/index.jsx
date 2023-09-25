import {
  Header,
  Landing,
  AboutUs,
  Judges,
  TimeLine,
  Sponsors,
  FaQs,
  Contact,
} from "../../Components";

import img from "../../assets/12313124.png";
const divStyle = {
  backgroundImage: `url(${img})`,
  height: "100vh",
};

const Home = () => {
  return (
    <>
      <div style={divStyle}>
        <Header />
        <Landing />
      </div>
      <AboutUs />
      <Judges />
      {/* <TimeLine />
      <Sponsors />
      <FaQs />
      <Contact /> */}
    </>
  );
};

export default Home;
