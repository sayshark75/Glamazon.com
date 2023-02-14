import { LOADING, ERROR, GET, POST, DELETE } from "./Wishlist.Types";

const initData = {
  loading: false,
  error: false,
  data: [],
};

export const WishlistReducer = (state = initData, { type, payload }) => {
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
    case POST: {
      return { ...state, data: [...state.data, payload] };
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
