import axios from "axios";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../constants/productConstants";

//Get all products
export const getProduct =
  (keyword = "",currentPage=1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}`;
      const { data } = await axios.get(link);
      dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//Get product details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
