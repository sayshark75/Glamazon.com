import { LOADING, ERROR, GET, POST, DELETE, UPDATE } from "./Products.Type";

const initData = {
  loading: false,
  error: false,
  data: [],
};

export const ProductReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, error: true, loading: false };
    }
    case GET: {
      return { ...state, data: payload, loading: false };
    }

    default: {
      return { ...state, loading: false, error: false };
    }
  }
};
