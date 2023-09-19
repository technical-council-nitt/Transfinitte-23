import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbarContent">
        <img src={logo} alt="Logo" className="logo" />
        <div className="navbarMenu">
          <div>
            <p>About Us</p>
          </div>
          <div>
            <p>Timeline</p>
          </div>
          <div>
            <p>Sponsors</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
