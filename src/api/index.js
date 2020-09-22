import axios from "axios";

axios.defaults.baseURL = "https://resume-72d17.firebaseio.com";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = false;

export const baseAPI = {
  project() {
    return axios.get(`/project.json`);
  },
  detail() {
    return axios.get(`/detail.json`);
  },
  resume() {
    return axios.get(`/resume.json`);
  },
  skillInventory() {
    return axios.get(`/skillInventory.json`);
  },
};

