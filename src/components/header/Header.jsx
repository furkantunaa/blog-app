import "./Header.css";
import Photo from "../../assets/flowers.jpg";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderTitles">
        <span className="HeaderTitleSm">React & Node</span>
        <span className="HeaderTitleLg">Blog</span>
      </div>
      <img className="HeaderImg" src={Photo} alt="" />
    </div>
  );
};

export default Header;
