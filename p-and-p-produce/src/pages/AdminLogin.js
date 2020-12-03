import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../components/Firebase.js";
import { AuthContext } from "../auth/Auth.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
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

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" 
          value="ppp@mail.com"
          />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" 
          value="123456"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
      <Link to="/">return to web home</Link>
    </div>
  );
};

export default withRouter(Login);

// import React from "react";
// import firebase from "../components/Firebase.js";
// // const authFirebase = firebase.auth();
// class AdminLogin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSignedIn: false,
//     };
//   }

//   // Listen to the Firebase Auth state and set the local state.
//   componentDidMount() {
//     this.unregisterAuthObserver = firebase
//       .auth()
//       .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
//   }

//   // Make sure we un-register Firebase observers when the component unmounts.
//   componentWillUnmount() {
//     this.unregisterAuthObserver();
//   }
//   handleSignIn = (event) => {
//     event.preventDefault();
//     console.log(event.target.email.value);
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(
//         event.target.email.value,
//         event.target.password.value
//       )
//       .then((user) => {
//         console.log("sign in!");
//         this.setState({ isSignedIn: true });
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorMessage);
//       });
//   };
//   render() {
//     if (!this.state.isSignedIn) {
//       return (
//         <div>
//           <h1>My App</h1>
//           <p>Please sign-in:</p>
//           <form onSubmit={this.handleSignIn}>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               //   onChange={this.handleEmailChange}
//               value={this.state.email}
//             />
//             <label>password:</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               //   onChange={this.handlePasswordChange}
//               value={this.state.password}
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <h1>My App</h1>
//         <p>
//           Welcome {firebase.auth().currentUser.displayName}! You are now
//           signed-in!
//         </p>
//         <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
//       </div>
//     );
//   }
// }

// export default AdminLogin;
