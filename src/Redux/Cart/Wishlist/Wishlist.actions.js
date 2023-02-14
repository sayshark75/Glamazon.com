import { LOADING, ERROR, GET, POST, DELETE } from "./Wishlist.Types";

import { deleteData, getFullData, postData } from "../../../Api/Requests";

export const getWishlistData = (url) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const data = await getFullData(url);
    dispatch({ type: GET, payload: data.data });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};

export const postWishlistData = (url, body) => async (dispatch) => {
  try {
    const data = await postData(url, body);
    dispatch({ type: POST, payload: data });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};

export const deleteWishlistData = (url, id) => async (dispatch) => {
  try {
    await deleteData(url, id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};
