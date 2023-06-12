import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform">
        <label>Username</label>
        <input
          type="text"
          className="registerinput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerinput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerinput"
          placeholder="Enter your password..."
        />
        <button className="registerbutton">Register</button>
      </form>
    </div>
  );
};

export default Register;
