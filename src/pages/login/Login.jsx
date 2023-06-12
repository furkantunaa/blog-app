import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform">
        <label>Email</label>
        <input
          type="text"
          className="logininput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="logininput"
          placeholder="Enter your password..."
        />
        <button className="loginbutton">LOGİN</button>
      </form>
    </div>
  );
};

export default Login;
