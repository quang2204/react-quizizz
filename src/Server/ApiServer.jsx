import axios from "./Axio";
const link = "http://localhost:8081/";
function ApiServer(email, password, name, role, img) {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("username", name);
  form.append("role", role);
  form.append("userImage", img);

  return axios.post(`api/v1/participant`, form);
}
function Updateuser(id, name, role, img) {
  const form = new FormData();

  form.append("username", name);
  form.append("id", id);
  form.append("role", role);
  form.append("userImage", img);

  return axios.put(`api/v1/participant`, form);
}
const getAlluser = () => {
  return axios.get(`api/v1/participant/all`);
};
const Deleteuser = (userid) => {
  return axios.delete(`api/v1/participant`, { data: { id: userid } });
};
const Phantrang = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
const Login = (email, password) => {
  return axios.post(`api/v1/login`, { email, password });
};
const Dangky= (email, password,username) => {
  return axios.post(`api/v1/register`, { email, password,username });
};
export { ApiServer, getAlluser, Updateuser, Deleteuser, Phantrang, Login ,Dangky};
