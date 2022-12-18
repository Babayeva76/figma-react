import "./Container1.scss";
import Image from "./Image.svg";
import svg1 from "./1.svg";
import google from "./Google.svg";
import svg4 from "./4.svg";
import long_right from "./long_right.svg";

export const Container1 = () => {
  return (
    <div className="container1">
      <div className="mainpart">
        <div className="mainpart1">
          <p className="hh1">
            This headline is the gist of the Your whole Website
          </p>
          <p className="pp1">
            And the description of hero section is follow up message after the
            punch of a great headline. So, make it short, simple, descriptive
            and to the point.
          </p>
          <div className="btnp1">
            <button className="btn2">
              Book A Meeting <img src={long_right} alt="" />
            </button>
            <p className="p1">
              Here you can put secondary <br />
              action statement & CTA
            </p>
          </div>
          <div className="svgs">
            <img className="svg1" src={svg1} alt="" />
            <img className="google" src={google} alt="" />
            <img className="svg4" src={svg4} alt="" />
          </div>
        </div>
        <img className="img1 desktop-only" src={Image} alt="" />
      </div>
    </div>
  );
};
