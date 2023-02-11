import { PAGE, RESET_QUERY, FILTER_CATGORY, FILTER_BRAND, FILTER_PRICE, FILTER_RATING } from "./MakeUp.Type";

const initData = {
  page: 1,
  totalPages: 10,
  query: ["random=1", "", "", ""],
};

export const MakeupReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case PAGE: {
      return { ...state, page: payload };
    }
    case FILTER_CATGORY: {
      state.query[0] = payload;
      return state;
    }
    case FILTER_BRAND: {
      state.query[1] = payload;
      return state;
    }
    case FILTER_PRICE: {
      state.query[2] = payload;
      return state;
    }
    case FILTER_RATING: {
      state.query[3] = payload;
      return state;
    }
    case RESET_QUERY: {
      return { ...state, query: "random=1" };
    }
    default: {
      return state;
    }
  }
};
