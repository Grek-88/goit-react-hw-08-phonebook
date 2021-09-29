import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getUser } from "../redux/user-selectors";

export default function PrivateRoute({ children, ...routeProps }) {
  const user = useSelector(getUser);
  return (
    <Route {...routeProps}>
      {user.user ? children : <Redirect to={"/login"} />}
    </Route>
  );
}
