import { postData } from "../../../Api/Requests";
import { LOADING, ERROR, SIGNUP } from "./SignUp.types";

export const SignUpDataSubmit = (signData) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const data = await postData("/register", signData);
    dispatch({ type: SIGNUP, payload: data });
  } catch (error) {
    dispatch({ type: ERROR });
    console.log("error: ", error);
  }
};
