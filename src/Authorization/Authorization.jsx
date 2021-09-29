import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actionOperation";
import s from "../Authorization/Authorization.module.css";
import AuthNav from "./AuthNav/AuthNav";
// import { getUser } from "../redux/user-selectors";
// import { useHistory } from "react-router";

export default function Authorization() {
  const dispatch = useDispatch();
  // const user = useSelector(getUser);
  // const history = useHistory();

  // if (user.user) {
  //   history.push("/contacts");
  // }

  const onLoginUser = (e) => {
    e.preventDefault();

    dispatch(
      loginUser({
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );

    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <>
      <AuthNav />

      <form className={s.form} onSubmit={onLoginUser}>
        <label className={s.label}>
          E-mail
          <input className={s.input} type="text" name="email" required />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="text"
            name="password"
            minLength="7"
            title="Пароль должен быть не менее 7 символов"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </>
  );
}
