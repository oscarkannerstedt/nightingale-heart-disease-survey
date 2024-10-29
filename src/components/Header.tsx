import Logo from "../assets/logo2.svg";
import "../style/header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="Logotyp" />
      </div>
    </header>
  );
};
