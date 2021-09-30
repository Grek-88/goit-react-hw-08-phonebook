import { useSelector, useDispatch } from "react-redux";
import s from "../User/User.module.css";
import { getUser } from "../../redux/user-selectors";
import { logoutUser } from "../../redux/actionOperation";

export default function User() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      {user?.user && (
        <div className={s.auth}>
          <img
            className={s.avatar}
            src={`https://eu.ui-avatars.com/api/?background=e7e7e7&color=000&name=${user.user.name}`}
            alt={`${user.user.name}`}
          />
          Привет, {user.user?.name}
          <button type="button" className={s.btn} onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}
