import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" alt="" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold mx-2 text-white">Vikas</span> 👋
      <br />A Software Engineer from India.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way."
      link="/portfolio/about"
      btnText="Visit my Portfolio"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/portfolio/projects"
      btnText="Learn More"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just few keystrokes away"
      link="/portfolio/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
