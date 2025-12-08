import api from "./axios";

export const login = async (email, password) => {
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  const response = await api.get("/user/current");
  return response.data;
};
