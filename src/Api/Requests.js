import axios from "axios";
const baseURL = process.env.APIBASEURL;

export const getData = async (url) => {
  try {
    const res = await axios.get(`${baseURL}/${url}`);
    return await res.data;
  } catch (err) {
    console.log("err: ", err);
  }
};
export const postData = async (url, obj) => {
  try {
    const res = await axios.post(`${baseURL}/${url}`, obj);
    return await res.data;
  } catch (err) {
    console.log("err: ", err);
  }
};
export const patchData = async (url, id, obj) => {
  try {
    const res = await axios.patch(`${baseURL}/${url}/${id}`, obj);
    return await res.data;
  } catch (err) {
    console.log("err: ", err);
  }
};
export const deleteData = async (url, id) => {
  try {
    const res = await axios.delete(`${baseURL}/${url}/${id}`);
    return await res.data;
  } catch (err) {
    console.log("err: ", err);
  }
};
