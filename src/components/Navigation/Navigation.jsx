import { NavLink } from "react-router-dom";
import Auth from "../../User/User";
import s from "../Navigation/Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <div className={s.wrapper}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              exact
              to="/"
              className={s.link}
              activeClassName={s.activeLink}
            >
              Phonebook
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/contacts"
              className={s.link}
              activeClassName={s.activeLink}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <Auth />
      </div>
      <hr />
    </>
  );
}
