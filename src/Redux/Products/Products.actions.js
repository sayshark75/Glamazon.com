import { deleteData, getFullData, patchData, postData } from "../../Api/Requests";
import { ERROR, GET, LOADING, POST, PATCH, DELETE, TOTALPAGES } from "./Products.Types";


export const getProductData = (url) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const data = await getFullData(url);
    const tPages = data.headers["x-total-count"];
    let calcPages = Math.floor(tPages / data.data.length);
    dispatch({ type: TOTALPAGES, payload: calcPages });
    dispatch({ type: GET, payload: data });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};

export const postProductData = (url, body) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const data = await postData(url, body);
    dispatch({ type: POST, payload: data });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};

export const patchProductData = (url, id, body) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    await patchData(url, id, body);
    dispatch({ type: PATCH, payload: body });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};

export const deleteProductData = (url, id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    await deleteData(url, id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};
