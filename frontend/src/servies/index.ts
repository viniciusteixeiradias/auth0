import axios from "axios";
import User from "./user";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

const authorized = async (accessToken: string) => {
  return await instance.get("http://localhost:3000/users/permissions", {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const unauthorized = async () => {
  return await instance.get("http://localhost:3000/");
};

const services = {
  user: User(instance),
  test: {
    authorized,
    unauthorized
  }
}

export { services };
