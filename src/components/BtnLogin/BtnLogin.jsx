import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import s from "../BtnLogin/BtnLogin.module.css";
import { getUser } from "../../redux/user-selectors";

export default function BtnLogin() {
  const user = useSelector(getUser);
  const history = useHistory();

  if (user.user) {
    history.push("/contacts");
  }

  const onLogin = () => {
    history.push("/login");
  };
  return (
    <button className={s.button} type="submit" onClick={onLogin}>
      Login / Sign up
    </button>
  );
}
