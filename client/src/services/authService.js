import { axiosInstance } from "../config/axioInstance";

export const signup = async (name, email, mobile, password) => {
  return axiosInstance
    .post("/user/signup", {
      name,
      email,
      mobile,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Signup failed");
    });
};

export const login = async (email, password) => {
  return axiosInstance
    .post("/user/login", {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Login failed");
    });
};

export const logout = async () => {
  return axiosInstance.post("/user/logout");
};
