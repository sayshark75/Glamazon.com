import { getData } from "../../Api/Requests";
import { LOADING, ERROR, GET, POST, DELETE, UPDATE } from "./Products.Type";

export const getDataOnly = (url) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const data = await getData(url);
    dispatch({ type: GET, payload: data });
  } catch (error) {
    console.log("error: ", error);
    dispatch({ type: ERROR });
  }
};
