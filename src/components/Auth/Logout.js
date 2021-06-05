import { Switch, Route, useHistory } from "react-router-dom";
import { useState } from "react";
import { updateToken } from "./UserToken";
import APIURL from "../helpers/environment";

const Logout = () => {
  const history = useHistory();

  let authenticate = (e) => {
    e.preventDefault();

    fetch(`${APIURL}/user/login`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        updateToken(json.token);
        console.log(json);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default Logout;
