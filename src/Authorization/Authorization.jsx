import { NavLink } from "react-router-dom";
import s from "../Authorization/Authorization.module.css";
import { Route, Switch } from "react-router";
import AuthNav from "./AuthNav/AuthNav";

export default function Authorization() {
  return (
    <>
      <AuthNav />

      <form className={s.form}>
        <label className={s.label}>
          E-mail
          <input className={s.input} type="text" name="email" required />
        </label>
        <label className={s.label}>
          Password
          <input className={s.input} type="tel" name="password" required />
        </label>
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </>
  );
}
