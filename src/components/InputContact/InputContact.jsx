import s from "../InputContact/InputContact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/actionOperation";
import { getContacts } from "../../redux/contacts-selectors";
import { getUser } from "../../redux/user-selectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InputContact(props) {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contacts?.find(
        (el) => el.name.toLowerCase() === e.target.name.value.toLowerCase()
      )
    ) {
      toast.error(`"${e.target.name.value}" is already in contacts.`);
    } else {
      dispatch(
        addContact({ name: e.target.name.value, number: e.target.number.value })
      );
    }

    e.target.name.value = "";
    e.target.number.value = "";
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        {!user?.user && <div className={s.blur}></div>}
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
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из 5ти и более цифр, и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
