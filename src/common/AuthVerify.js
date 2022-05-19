import React from "react";
import { history } from '../helpers/history';

const parseJwt = (token) => {
  try {
    return JSON.parse(Buffer.from((token.split(".")[1])).toString('base64'));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <div></div>;
};

export default AuthVerify;
