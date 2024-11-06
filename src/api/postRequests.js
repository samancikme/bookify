import axios from "axios";
import { toggleModal } from "../store/reducers/pageSlice";

export const registration = (url, value, { resetForm }) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${url}/register`, value, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(res);
      dispatch(toggleModal("log-in"));
      resetForm();
      console.log(res.data);
    } catch (err) {
      resetForm();
      console.log(err);
    }
  };
};

export const logIn = (url, value, { resetForm }) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${url}/login`, value, {
        headers: {
          "Content-type": "application/json",
        },
      });
      resetForm();
      console.log(res.data);
      localStorage.setItem("travel-token", res.data.token);
      setTimeout(() => dispatch(toggleModal("log-in")), 2000);
    } catch (err) {
      resetForm();
      console.log(err);
    }
  };
};

export const boofdsk = (url, value) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("travel-token");
      const res = await axios.post(`${url}/book`, value, { headers });
      const headers = {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const book = (url, values) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("travel-token");
      const res = await axios.post(`${url}/book`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Request muvaffaqiyatli:", res.data);
    } catch (err) {
      console.log("Xatolik yuz berdi:", err);
    }
  };
};
