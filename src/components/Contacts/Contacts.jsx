import { useSelector, useDispatch } from "react-redux";
import { findContact } from "../../redux/actions";
import FindContact from "../FindContact/FindContact";
import s from "../Contacts/Contacts.module.css";
import { useEffect } from "react";
import { deleteContact, fetchContact } from "../../redux/actionOperation";
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from "../../redux/contacts-selectors";
import Spiner from "../Loader/Loader";

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const handleFindContact = (dataFilterContact) => {
    dispatch(findContact(dataFilterContact));
  };

  return (
    <>
      <FindContact onChange={handleFindContact} />
      {isLoading && <Spiner />}
      <ul className={s.list}>
        {contacts.map((el) => {
          if (filter) {
            if (el.name.toLowerCase().includes(filter)) {
              return (
                <li key={el.id} className={s.item}>
                  <span>{el.name}</span>
                  <span>{el.number}</span>
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
              <li key={el.id} className={s.item}>
                <span>{el.name}</span>
                <span>{el.number}</span>
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
      {error && (
        <h1 style={{ color: "red" }}>Произошла ошибка, попробуйте снова...</h1>
      )}
    </>
  );
}
