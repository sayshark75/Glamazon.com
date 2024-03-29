import { LOADING, ERROR, SIGNUP } from "./SignUp.types";

let initData = {
  signData: [],
  loading: false,
  error: false,
};

export const SignUpReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, loading: false, error: true };
    }
    case SIGNUP: {
      return { ...state, loading: false, signData: [...state.signData, payload] };
    }
    default: {
      return state;
    }
  }
};
