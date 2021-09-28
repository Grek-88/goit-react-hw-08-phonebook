import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContact = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get("/contacts");
      return contacts.data;
    } catch (error) {
      console.log(123);
      return rejectWithValue(error);
    }
  }
);

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
  "user/login",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const user = await axios.post("/users/signup", { name, email, password });
      return user.data;
    } catch (error) {
      console.log(111);
      return rejectWithValue(error);
    }
  }
);
