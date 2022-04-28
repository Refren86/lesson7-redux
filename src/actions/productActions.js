import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
} from "../constants/products";

export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });
export const removeProductAction = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});
export const editProductAction = (payload) => ({ type: EDIT_PRODUCT, payload });
