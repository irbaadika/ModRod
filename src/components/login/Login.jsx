import React, { useContext } from "react";
import { useState } from "react";
import "./LoginStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)


  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navigate('/dashboard/')
      })
      .catch((error) => {
        setError(true)
      });
  };

  return (
    <div className="login">
      <div class="wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div class="field email">
            <div class="input-area">
              <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            </div>
          </div>
          <div class="field password">
            <div class="input-area">
              <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            </div>
          </div>
          {error && (
            <span className="alert-login">Wrong email or password!</span>
          )}
          <input type="submit" value="Login" />
        </form>
        <div class="sign-txt">
          Dont have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
