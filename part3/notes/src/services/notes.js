import axios from "axios";
// if running with local json-server, use this:
// const baseUrl = "http://localhost:3001/api/notes";

// when hosted on heroku, use this:
const baseUrl = "https://notes-simple-server.herokuapp.com/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
