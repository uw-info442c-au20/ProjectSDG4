import React, { Component, useState, useEffect } from "react"; //import React Component
import { Content } from "./Content";
import { Login } from "./Login.js";
import fire from "../../database/firebase";

export class HomePage extends Component {
  // LoginFn = () => {
  //     const [user, setUser] = useState("");
  //     const [email, setEmail] = useState("");
  //     const [password, setPassword] = useState("");
  //     const [emailError, setEmailError] = useState("");
  //     const [passwordError, setPasswordError] = useState("");
  //     const [hasAccount, setHasAccount] = useState(false);
  //     clearInput = () => {
  //         setEmail("");
  //         setPassword("");
  //     };
  //     clearErrors = () => {
  //         setEmailError("");
  //         setPasswordError("");
  //     };
  //     handleLogin = () => {
  //         this.clearErrors();
  //         fire
  //         .auth()
  //         .signInWithEmailAndPassword(email, password)
  //         .catch((err) => {
  //             switch (err.code) {
  //             case "auth/invalid-email":
  //             case "auth/user-disabled":
  //             case "auth/user-not-found":
  //                 setEmailError(err.message);
  //                 break;
  //             case "auth/wrong-password":
  //                 setPasswordError(err.message);
  //                 break;
  //             }
  //         });
  //     };
  //     handleSignUp = () => {
  //         this.clearErrors();
  //         fire
  //         .auth()
  //         .createUserWithEmailAndPassword(email, password)
  //         .catch((err) => {
  //             switch (err.code) {
  //             case "auth/email-already-in-use":
  //             case "auth/invalid-email":
  //                 setEmailError(err.message);
  //                 break;
  //             case "auth/weak-password":
  //                 setPasswordError(err.message);
  //                 break;
  //             }
  //         });
  //     };
  //     handleLogOut = () => {
  //         fire.auth().signOut();
  //     };
  //     authListener = () => {
  //         fire.auth().onAuthStateChanged((user) => {
  //         if (user) {
  //             this.clearInput();
  //             setUser(user);
  //         } else {
  //             setUser("");
  //         }
  //         });
  //     };
  //     useEffect = () => {
  //         authListener();
  //     };

  render() {
    return (
      <section>
        <Content />
      </section>
    );
  }
  //     return (
  //     <section>
  //         <Content />
  //         <Login
  //         email={email}
  //         setEmail={setEmail}
  //         password={password}
  //         setPassword={setPassword}
  //         handleLogin={handleLogin}
  //         handleSignUp={handleSignUp}
  //         handleLogOut={handleLogOut}
  //         hasAccount={hasAccount}
  //         setHasAccount={setHasAccount}
  //         emailError={emailError}
  //         passwordError={passwordError}
  //         />
  //     </section>
  //     );
  // }
}
