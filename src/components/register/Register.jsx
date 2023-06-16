import React, { useState } from "react";
import "./RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/login')
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Register Success!',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        setError(true)
      });
  };

  return (
    <div className="register">
      <div class="wrapper">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div class="field email">
            <div class="input-area">
              <input type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            </div>
          </div>
          <div class="field password">
            <div class="input-area">
              <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            </div>
          </div>
          {error && (<span className="alert-register">Fill blank space!</span>)}
          <input type="submit" value="Register" />
        </form>
        <div class="sign-txt">
          have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
