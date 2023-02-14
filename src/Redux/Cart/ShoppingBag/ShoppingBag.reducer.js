import { LOADING, TOTALPRICE, ERROR, GET, POST, DELETE } from "./ShoppingBag.Type";

const initData = {
  loading: false,
  error: false,
  data: [],
  totalPrice: 0,
};

export const ShoppingBagReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, error: true, loading: false };
    }
    case TOTALPRICE: {
      return { ...state, totalPrice: payload };
    }
    case GET: {
      return { ...state, data: payload, loading: false };
    }
    case POST: {
      return { ...state, data: [...state.data, payload], loading: false };
    }
    case DELETE: {
      const filteredData = state.data.filter((el) => el.id !== payload);
      return { ...state, data: filteredData };
    }
    default: {
      return { ...state, loading: false, error: false };
    }
  }
};
