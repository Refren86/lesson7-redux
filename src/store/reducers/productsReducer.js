import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
} from "../../constants/products";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          return product.id === action.payload.id
            ? {
                ...product,
                title: action.payload.newTitle,
                description: action.payload.newDescription,
              }
            : product;
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
