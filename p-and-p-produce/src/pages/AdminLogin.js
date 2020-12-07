import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../components/Firebase.js";
import { AuthContext } from "../auth/Auth.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/admin");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  const handleResetPW = () => {
    const email = prompt("Enter email for reset password:");
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("send email comple");
      })
      .catch(() => {
        console.log("Error resetting password");
      });
  };
  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="app-login">
      <div className="div-sign-up div-log-in">
        <h1>Log in</h1>
        <div className="admin-logo-login">
          <img src={require("../assets/images/icon-ppproduce.png")}></img>
          <p className="text-admin-nav">Admin</p>
        </div>
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              // defaultValue="supatcharee_chaiya@kkumail.com"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
              // defaultValue="123456"
            />
          </label>
          <button type="submit">Log in</button>
        </form>
        <div>
          <Link to="/">return to web home</Link>
          <Link
            onClick={() => {
              handleResetPW();
            }}
          >
            reset password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
