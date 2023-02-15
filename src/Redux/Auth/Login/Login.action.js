import { postData } from "../../../Api/Requests";
import { LOADING, ERROR, LOGIN } from "./Login.types";

export const LoginDataSubmit = (loginData) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const data = await postData("/login", loginData);
    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    dispatch({ type: ERROR });
    console.log("error: ", error);
  }
};
