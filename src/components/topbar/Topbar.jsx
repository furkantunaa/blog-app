import "./TopBar.css";
import Photo from "../../assets/photo.png";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = false;

  return (
    <div className="top">
      <div className="top-wrapper">
        <div className="top-left">
          <i className=" topIcon fa-brands fa-facebook-f"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="top-center">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="top-right">
          {user ? (
            <img className="topImg" src={Photo} alt="" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGİN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="register">
                  REGİSTER
                </Link>
              </li>
            </ul>
          )}
          <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
