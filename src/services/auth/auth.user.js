import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080";

const getPublicContent = () => {
  return axios.get(API_URL + "/");
};
const getOperarioView = () => {
  return axios.get(API_URL + "/operario", { headers: authHeader() });
};
const getAsistenteView = () => {
  return axios.get(API_URL + "/asistente", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "/admin", { headers: authHeader() });
};
export default {
  getPublicContent,
  getOperarioView,
  getAsistenteView,
  getAdminBoard,
};
