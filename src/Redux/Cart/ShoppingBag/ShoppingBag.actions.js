import { LOADING, ERROR, GET, DELETE, TOTALPRICE, POST } from "./ShoppingBag.Type";

import { deleteData, getFullData, postData } from "../../../Api/Requests";

export const getShoppingBagData = (url) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const data = await getFullData(url);
    const priceCalc = data.data.reduce((acc, el) => {
      return acc + el.price;
    }, 0);
    dispatch({ type: TOTALPRICE, payload: priceCalc });
    dispatch({ type: GET, payload: data.data });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};

export const postShoppingBagData = (body) => async (dispatch) => {
  try {
    const data = await postData(`/shoppingcart`, body);
    console.log('data: ', body);
    dispatch({ type: POST, payload: data });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};

export const deleteShoppingBagData = (url, id) => async (dispatch) => {
  try {
    await deleteData(url, id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};
