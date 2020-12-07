import React, { useState, useEffect } from "react"; //import React Component
import fire from "../../database/firebase";
import { withRouter } from "react-router-dom";

const Login = ({ history, toggleLoginState }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const loginSuccessfully = (user) => {
    console.log(user);
    toggleLoginState(true, user);
    history.push("/Dashboard");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginSuccessfully(user))
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => loginSuccessfully(user))
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogOut = (user) => {
    fire.auth().signOut();
    history.push("/");
    toggleLoginState(false, user);
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
        var uid = user.uid;
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
        <p className="error-massege">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="Sign-in-up-button" onClick={handleLogin}>
                Sign in
              </button>
              <p>
                Don't have an account ?{" "}
                <span
                  className="sign-in-span"
                  onClick={() => setHasAccount(!hasAccount)}>
                  Sign up
                </span>
              </p>
            </>
          ) : (
            <>
              <button className="Sign-in-up-button" onClick={handleSignUp}>
                Sign up
              </button>
              <p>
                Have an account ?{" "}
                <span
                  className="sign-in-span"
                  onClick={() => setHasAccount(!hasAccount)}>
                  Sign in
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export const LoginWithRouter = withRouter(Login);
