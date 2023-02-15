import { LOADING, ERROR, LOGIN } from "./Login.types";

let initData = {
  loginData: [],
  loading: false,
  error: false,
};

export const LoginReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, loading: false, error: true };
    }
    case LOGIN: {
      return { ...state, loading: false, loginData: [...state.loginData, payload] };
    }
    default: {
      return state;
    }
  }
};
