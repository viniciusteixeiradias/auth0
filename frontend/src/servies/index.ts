import axios from "axios";
import User from "./user";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

const services = {
  user: User(instance)
}

export { services };
