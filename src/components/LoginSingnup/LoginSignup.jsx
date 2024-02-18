import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/man.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="conatiner">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
       {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
        
      </div>
      {action === "Sign Up" ? <div></div> : <div className="forgote-password">
        Lost Password? <span>Click Here!</span>
      </div>}
      
      <div className="submit-conatiner">
        <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</button>
        <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
      </div>
    </div>
  );
};

export default LoginSignup;
