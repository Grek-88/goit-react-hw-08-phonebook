import { reducerContacts, reducerUser } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: reducerContacts,
    user: reducerUser,
  },
});

export default store;
