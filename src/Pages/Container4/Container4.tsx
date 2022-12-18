import "./Container4.scss";
import emb from "./1.svg";
import long_right from "./long_right.svg";
import Rectangle3 from "./Rectangle (3).svg";
import dots from "./Three.svg";

export const Container4 = () => {
  return (
    <div className="container4">
      <div className="mainpart4">
        <div className="leftpart2">
          <p className="pp3">Success Story</p>
          <p className="pp4">
            Nowadays, it isn’t uncommon to see lenders rapidly adopting a
            digital lending strategy to streamline the lending process
          </p>
          <img className="emb" src={emb} alt="" />
          <a className="readlink" href="./App.tsx">
            Read Complete Case Study
            <img className="longright" src={long_right} alt="" />
          </a>
          <img className="dots" src={dots} alt="" />
        </div>
        <img className="rect3 desktop-only" src={Rectangle3} alt="" />
      </div>
    </div>
  );
};
