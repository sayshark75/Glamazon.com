import { PAGE, RESET_QUERY, FILTER_CATGORY, FILTER_BRAND, FILTER_PRICE, FILTER_RATING } from "./MakeUp.Type";

export const changePage = (pageNo) => (dispatch) => {
  dispatch({ type: PAGE, payload: pageNo });
};

export const setCategory = (category) => (dispatch) => {
  dispatch({ type: FILTER_CATGORY, payload: category });
};
export const setBrand = (brand) => (dispatch) => {
  dispatch({ type: FILTER_BRAND, payload: brand });
};
export const setPrice = (price) => (dispatch) => {
  dispatch({ type: FILTER_PRICE, payload: price });
};
export const setRating = (rating) => (dispatch) => {
  dispatch({ type: FILTER_RATING, payload: rating });
};

export const resetQuery = () => (dispatch) => {
  dispatch({ type: RESET_QUERY });
};
