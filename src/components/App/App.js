import "./App.css";

import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../redux/actionOperation";
import { Switch, Redirect } from "react-router";
import Navigation from "../Navigation/Navigation";
import BtnLogin from "../BtnLogin/BtnLogin";
import Authorization from "../../Authorization/Authorization";
import Registration from "../../Authorization/Registration/Registration";
import PrivateRoute from "../../User/PrivateRoute";
import PablicRoute from "../../User/PablicRoute";
import { getIsRefresh } from "../../redux/user-selectors";
import Footer from "../Footer/Footer";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefresh);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Загружаем...</h1>
  ) : (
    <div className="App">
      <Navigation />
      <Switch>
        <PablicRoute exact path="/">
          <InputContact />
          <BtnLogin />
        </PablicRoute>

        <PablicRoute path="/login" restricted>
          <Authorization />
        </PablicRoute>

        <PablicRoute path="/register" restricted>
          <Registration />
        </PablicRoute>

        <PrivateRoute path="/contacts">
          <InputContact />
          <Contacts />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}
