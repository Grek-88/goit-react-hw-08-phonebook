import {
  reducerContacts,
  reducerUser,
  reducerIsRefresh,
  reducerError,
} from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    contacts: reducerContacts,
    user: persistReducer(userPersistConfig, reducerUser),
    isRefreshing: reducerIsRefresh,
    error: reducerError,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { store, persistor };
