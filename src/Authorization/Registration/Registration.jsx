import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/actionOperation";
import AuthNav from "../AuthNav/AuthNav";
import s from "../Registration/Registration.module.css";

export default function Registration() {
  const dispatch = useDispatch();
  const onSignUser = (e) => {
    e.preventDefault();
    dispatch(
      signupUser({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  };
  return (
    <>
      <AuthNav />

      <form className={s.form} onSubmit={onSignUser}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
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
            autoComplete="off"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
}
