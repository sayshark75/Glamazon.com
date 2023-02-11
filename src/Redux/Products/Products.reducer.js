import { LOADING, ERROR, GET, POST, DELETE, PATCH, TOTALPAGES } from "./Products.Types";

const initData = {
  loading: false,
  error: false,
  data: [],
  totalPages:10
};

export const ProductReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, error: true, loading: false };
    }
    case TOTALPAGES: {
      return { ...state, totalPages: payload };
    }
    case GET: {
      return { ...state, data: payload, loading: false };
    }
    case POST: {
      return { ...state, data: [...state.data, payload], loading: false };
    }
    case PATCH: {
      const updatedData = state.data.map((el) => (el.id === payload.id ? { ...el, ...payload } : el));
      return { ...state, data: updatedData, loading: false };
    }
    case DELETE: {
      const filteredData = state.data.filter((el) => el.id !== payload);
      return { ...state, data: filteredData, loading: false };
    }
    default: {
      return { ...state, loading: false, error: false };
    }
  }
};
