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
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            defaultValue="supatcharee_chaiya@kkumail.com"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            defaultValue="123456"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
      <p
        onClick={() => {
          handleResetPW();
        }}
      >
        reset password
      </p>
      <Link to="/">return to web home</Link>
    </div>
  );
};

export default withRouter(Login);
