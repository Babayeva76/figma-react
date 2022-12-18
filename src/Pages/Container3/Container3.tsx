import "./Container3.scss";
import circle from "./circle.svg";
import circle2 from "./circle2.svg";
import circle3 from "./circle3.svg";
import circle1 from "./circle1.svg";

export const Container3 = () => {
  return (
    <div className="container3">
      <div className="mainpart3">
        <div className="bow">
          <p className="pp2">Benefits of working with us</p>
        </div>
        <div className="row1">
          <div className="row">
            <div className="icon">
              <img src={circle} alt="" />
            </div>
            <div className="iconp">
              <p className="tz">Time zones ain’t no thing</p>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <img src={circle1} alt="" />
            </div>
            <div className="iconp">
              <p className="tz">Time zones ain’t no thing</p>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="row">
            <div className="icon">
              <img src={circle2} alt="" />
            </div>
            <div className="iconp">
              <p className="tz">Time zones ain’t no thing</p>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <img src={circle3} alt="" />
            </div>
            <div className="iconp">
              <p className="tz">Time zones ain’t no thing</p>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
