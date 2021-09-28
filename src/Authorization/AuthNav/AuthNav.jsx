import { NavLink } from "react-router-dom";
import s from "../AuthNav/AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.wrapper}>
      <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        Login
      </NavLink>
      <NavLink to="/register" className={s.link} activeClassName={s.activeLink}>
        Sign up
      </NavLink>
    </div>
  );
}
