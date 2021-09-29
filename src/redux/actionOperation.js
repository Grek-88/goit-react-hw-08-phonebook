import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contacts = await axios.post("/contacts", {
        name,
        number,
      });
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "user/signup",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const user = await axios.post("/users/signup", { name, email, password });
      token.set(user.data.token);
      return user.data;
    } catch (error) {
      console.log(111);
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await axios.post("/users/login", { email, password });
      token.set(user.data.token);
      return user.data;
    } catch (error) {
      console.log(222);
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (error) {
      console.log(333);
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.user.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistToken);
    try {
      const user = await axios.get("/users/current");
      return user.data;
    } catch (error) {
      console.log(444);
      return thunkAPI.rejectWithValue(error);
      // return;
    }
  }
);

export const fetchContact = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.user.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistToken);
    try {
      const user = await axios.get("/contacts");
      return user.data;
    } catch (error) {
      console.log(444);
      return thunkAPI.rejectWithValue(error);
      // return;
    }
  }
);
