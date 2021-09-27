import reducerContacts from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: reducerContacts,
  },
});

export default store;
