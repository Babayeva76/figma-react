import "./Header.scss";
import Logo from "./Logo.svg";
import long_right from "./long_right.svg";

export const Header = () => {
  return (
    <div className="logo-nav-btn">
      <div className="logo-nav">
        <img className="logohd" src={Logo} alt="Logo" />
        <button className="mobile-only btnstyle">Menu</button>
        <nav className="mainnav desktop-only">
          <a className="nav1" href="./App.tsx">
            Home
          </a>
          <a className="nav1" href="./App.tsx">
            Features
          </a>
          <a className="nav1" href="./App.tsx">
            Pricing
          </a>
          <a className="nav1" href="./App.tsx">
            About Us
          </a>
          <a className="nav1" href="./App.tsx">
            Help
          </a>
        </nav>
      </div>
      <button className="btn1">
        Book A Meeting <img className="lng1" src={long_right} alt="" />
      </button>
    </div>
  );
};
