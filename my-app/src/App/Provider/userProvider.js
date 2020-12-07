import React, { Component, createContext } from "react";
import { auth } from "../database/firebase.js";

const defaultUser = { loggedIn: false, email: "" };
const UserContext = React.createContext(defaultUser);
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true, email: user.email });
    } else {
      callback({ loggedIn: false });
    }
  });
}

export default UserProvider;
