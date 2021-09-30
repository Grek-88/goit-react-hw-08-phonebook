import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getUser } from "../../redux/user-selectors";

export default function PablicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const user = useSelector(getUser);
  const shouldReedirect = user.user && restricted;

  return (
    <Route {...routeProps}>
      {shouldReedirect ? <Redirect to={"/contacts"} /> : children}
    </Route>
  );
}
