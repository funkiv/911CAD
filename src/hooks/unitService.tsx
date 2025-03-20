const baseUrl = "http://localhost:3000/units";
const getAll = () => {
  return fetch(baseUrl).then((response) => response.json());
};

export default {
  getAll: getAll,
};
