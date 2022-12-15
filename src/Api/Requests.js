import axios from "axios";

const BaseURL = `https://glamazonapi.onrender.com`;

export const getData = async (url) => {
  try {
    const res = await axios.get(`${BaseURL}${url}`);
    return await res.data;
  } catch (err) {
    console.log("err: ", err);
  }
};
export const postData = async (url, obj) => {
  try {
    const res = await axios.post(`${BaseURL}${url}`, obj);
    return await res.data;
  } catch (err) {
    console.log("err: ", err);
  }
};
export const patchData = async (url, id, obj) => {
  try {
    const res = await axios.patch(`${BaseURL}${url}/${id}`, obj);
    return await res.data;
  } catch (err) {
    console.log("err: ", err);
  }
};
export const deleteData = async (url, id) => {
  try {
    const res = await axios.delete(`${BaseURL}${url}/${id}`);
    return await res.data;
  } catch (err) {
    console.log("err: ", err);
  }
};
