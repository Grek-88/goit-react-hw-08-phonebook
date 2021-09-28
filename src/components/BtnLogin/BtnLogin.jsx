import { useHistory } from "react-router";
import s from "../BtnLogin/BtnLogin.module.css";

export default function BtnLogin() {
  const history = useHistory();
  const onLogin = () => {
    history.push("/login");
  };
  return (
    <button className={s.button} type="submit" onClick={onLogin}>
      Login / Sign up
    </button>
  );
}
