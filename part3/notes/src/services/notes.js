import axios from "axios";
// if running with local json-server, use this:
// const baseUrl = "http://localhost:3001/api/notes";

// when frontend and backend hosted on heroku, can use relative path:
const baseUrl = "/api/notes";

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

const noteService = { getAll, create, update };
export default noteService;
