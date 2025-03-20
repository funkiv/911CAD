import { Incident } from "../types";

const baseUrl = "http://localhost:3000/incidentData";
const getAll = () => {
  return fetch(baseUrl).then((response) => response.json());
};
const create = (newIncident: Incident) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newIncident),
  }).then((response) => response.body);
};

export default {
  getAll: getAll,
  create: create,
};
