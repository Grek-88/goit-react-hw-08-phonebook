import { useSelector, useDispatch } from "react-redux";
import { findContact } from "../../redux/actions";
import FindContact from "../FindContact/FindContact";
import s from "../Contacts/Contacts.module.css";
import { deleteContact } from "../../redux/actionOperation";
import { getContacts, getFilter } from "../../redux/contacts-selectors";

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <FindContact
        onChange={(dataFilterContact) =>
          dispatch(findContact(dataFilterContact))
        }
      />

      <ul>
        {contacts.map((el) => {
          if (filter) {
            if (el.name.toLowerCase().includes(filter)) {
              return (
                <li key={el.id} className={s.li}>
                  {el.name} {el.number}
                  <button
                    className={s.button}
                    onClick={() => dispatch(deleteContact(el.id))}
                  >
                    Delete
                  </button>
                </li>
              );
            }
          } else {
            return (
              <li key={el.id} className={s.li}>
                {el.name} {el.number}
                <button
                  className={s.button}
                  onClick={() => dispatch(deleteContact(el.id))}
                >
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
