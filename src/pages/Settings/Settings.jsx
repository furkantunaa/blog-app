import "./Settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Photo from "../../assets/view.jpg";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingsupdatetitle">Update Your Account</span>
          <span className="settingsdeletetitle"> Delete Account</span>
        </div>
        <form className="settingsform">
          <label>Profil Picture</label>
          <div className="settingsPP">
            <img src={Photo} alt="" />
            <label htmlFor="fileınput">
              <i className=" settingsPPicon fa-light fa-user"></i>
            </label>
            <input type="file" id="finleınput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="Safak@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingssubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
