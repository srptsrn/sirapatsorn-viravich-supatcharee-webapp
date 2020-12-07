import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../components/Firebase.js";
import { AuthContext } from "../auth/Auth.js";
import AdminNavBar from "../components/AdminNavBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AdminAccount = ({ history }) => {
  const handleChangePW = useCallback(
    async (event) => {
      event.preventDefault();
      const { newPassword } = event.target.elements;
      try {
        await firebase
          .auth()
          .currentUser.updatePassword(newPassword.value)
          .then(function () {
            alert("Update password successful.");
          })
          .catch(function (error) {
            alert(error.message);
          });
        window.location.reload(true);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const nameAdmin = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      return user.displayName;
    } else {
      return "";
    }
  };
  const handleChangeName = useCallback(
    async (event) => {
      event.preventDefault();
      const { fname } = event.target.elements;
      try {
        const user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: fname.value,
          })
          .then(function () {
            alert("Update name successful.");
          })
          .catch(function (error) {
            alert(error.message);
          });
        window.location.reload(true);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="app-admin">
      <AdminNavBar account></AdminNavBar>
      <div className="display-product">
        <div className="div-sign-up">
          <h1>Change name</h1>
          <form onSubmit={handleChangeName}>
            <label>
              Full name
              <input
                name="fname"
                type="text"
                placeholder="Full name"
                defaultValue={nameAdmin()}
              />
            </label>
            <button type="submit">Change name</button>
          </form>
          <h1>Change password</h1>
          <form onSubmit={handleChangePW}>
            <label>
              New Password
              <input
                name="newPassword"
                type="password"
                placeholder="Password"
              />
            </label>
            <button type="submit">Change password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminAccount);
