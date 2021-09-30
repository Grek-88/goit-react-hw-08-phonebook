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
import PrivateRoute from "../User/PrivateRoute";
import PablicRoute from "../User/PablicRoute";
import { getIsRefresh, getError } from "../../redux/user-selectors";
import Footer from "../Footer/Footer";
import Spiner from "../Loader/Loader";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefresh);
  const isError = useSelector(getError);

  const Msg = () => (
    <div>
      Error, please try again... <br />
      <br /> May be incorrect Login or Password...
    </div>
  );

  useEffect(() => {
    if (isError) {
      toast.error(<Msg />, {
        theme: "colored",
        icon: "😵",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isError]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spiner />
  ) : (
    <>
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
      <ToastContainer />
    </>
  );
}
