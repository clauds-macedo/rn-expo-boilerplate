import axios from "axios";
import { IHttpRepository } from "./http-client-contract";

const instance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosHttpRepository: IHttpRepository = {
  async get(url) {
    const response = await instance.get(url);
    return response.data;
  },

  async post(url, data) {
    const response = await instance.post(url, data);
    return response.data;
  },

  async put(url, data) {
    const response = await instance.put(url, data);
    return response.data;
  },

  async delete(url) {
    const response = await instance.delete(url);
    return response.data;
  },
};
