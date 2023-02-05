import axios from "axios";

const BaseURL = `https://nice-ruby-beaver-fez.cyclic.app`;

export const getFullData = async (url) => {
  try {
    return await axios.get(`${BaseURL}${url}`);
  } catch (err) {
    console.log("err: ", err);
  }
};

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
    return await res;
  } catch (err) {
    console.log("err: ", err);
  }
};
export const patchData = async (url, id, obj) => {
  try {
    const res = await axios.patch(`${BaseURL}${url}/${id}`, obj);
    return await res;
  } catch (err) {
    console.log("err: ", err);
  }
};
export const deleteData = async (url, id) => {
  try {
    const res = await axios.delete(`${BaseURL}${url}/${id}`);
    return await res;
  } catch (err) {
    console.log("err: ", err);
  }
};
