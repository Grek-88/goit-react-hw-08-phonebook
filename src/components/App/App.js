import "./App.css";

import Section from "../Section/Section";
import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../redux/actionOperation";
import {
  getContacts,
  getIsLoading,
  getError,
} from "../../redux/contacts-selectors";

export default function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className="App">
      <Section title="Phonebook">
        <InputContact />
      </Section>
      {isLoading && <h1>Загружаем...</h1>}
      {error && (
        <h1 style={{ color: "red" }}>Произошла ошибка, попробуйте снова...</h1>
      )}
      {contacts?.length > 0 && (
        <Section title="Contacts">
          <Contacts />
        </Section>
      )}
    </div>
  );
}
