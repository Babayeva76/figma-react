import "./Container2.scss";
import Group11 from "./Group 11.svg";
import Group10 from "./Group 10.svg";
import Group9 from "./Group 9.svg";
import long_right from "./long_right.svg";

export const Container2 = () => {
  return (
    <div className="container2">
      <div className="mainpart2">
        <div className="leftpart">
          <div className="lp">
            <div className="group11">
              <img className="g11" src={Group11} alt="" />
            </div>
            <div className="pp11">
              <p className="fb">First Benefit</p>
              <p className="ghq">
                Gorgeous, high-quality design system for mobile, tablet &
                desktop devices a few
              </p>
            </div>
          </div>
          <div className="lp">
            <div className="group11">
              <img className="g11" src={Group10} alt="" />
            </div>
            <div className="pp11">
              <p className="fb">Second Benefit</p>
              <p className="ghq">
                Gorgeous, high-quality design system for mobile, tablet &
                desktop devices a few
              </p>
            </div>
          </div>
          <div className="lp">
            <div className="group11">
              <img className="g11" src={Group9} alt="" />
            </div>
            <div className="pp11">
              <p className="fb">Third Benefit</p>
              <p className="ghq">
                Gorgeous, high-quality design system for mobile, tablet &
                desktop devices a few
              </p>
            </div>
          </div>
        </div>
        <div className="rightpart">
          <p className="hom">
            Headline of Modern and Digital Lending Platform Seconds
          </p>
          <p className="nii">
            Nowadays, it isn’t uncommon to see lenders rapidly adopting a
            digital lending strategy
          </p>
          <button className="btn3">
            Learn More About
            <img src={long_right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
