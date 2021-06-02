import { Redirect } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("token") != null;

  if (!isAuth) {
    return <Redirect to="/" />;
  }
  // To do check if signed-in goto home, searchdrink, random
  return children;
}
