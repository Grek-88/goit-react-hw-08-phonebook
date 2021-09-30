import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUser } from "../../redux/user-selectors";
import Auth from "../User/User";
import s from "../Navigation/Navigation.module.css";

export default function Navigation() {
  const user = useSelector(getUser);
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
          {user.user && (
            <li className={s.item}>
              <NavLink
                to="/contacts"
                className={s.link}
                activeClassName={s.activeLink}
              >
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
        <Auth />
      </div>
      <hr />
    </>
  );
}
