import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../components/Firebase.js";
import { AuthContext } from "../auth/Auth.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { name, email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(() => {
            var user = firebase.auth().currentUser;
            var newName = name.value;
            console.log(newName);
            user
              .updateProfile({
                displayName: newName,
              })
              .then(function () {
                console.log(user.displayName);
              })
              .catch(function (error) {
                console.log("error ", error);
              });
            user.sendEmailVerification(); //Send email verification
            alert("Create account success. please check email verification."); //Show success message
        });
        firebase.auth().signOut(); //Logout is triggered --> line 16 in app.js
        history.push("/admin/signup");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Full Name
          <input name="name" type="text" placeholder="Full Name" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/admin">return to web admin</Link>
    </div>
  );
};

export default withRouter(SignUp);
