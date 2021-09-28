import s from "../User/User.module.css";

export default function User() {
  return (
    <div className={s.auth}>
      <img
        className={s.avatar}
        src="https://eu.ui-avatars.com/api/?background=e7e7e7&color=000&name=user"
        alt="user.name"
      />
      Првиет, user.name
      <button type="button" className={s.btn}>
        Logout
      </button>
    </div>
  );
}
