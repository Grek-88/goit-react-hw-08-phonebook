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
import { Route, Switch } from "react-router";
import Navigation from "../Navigation/Navigation";
import BtnLogin from "../BtnLogin/BtnLogin";
import Authorization from "../../Authorization/Authorization";
import Registration from "../../Authorization/Registration/Registration";

export default function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContact());
  // }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <InputContact />
          <BtnLogin />
        </Route>
        <Route path="/login">
          <Authorization />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        {/* <Section title="Phonebook">
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
        )} */}
      </Switch>
    </div>
  );
}
