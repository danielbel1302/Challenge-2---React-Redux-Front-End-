// Importa las action types acá

import {
  createProduct,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
} from "../actions";

const initialState = {
  products: [],
  productDetail: {},
};

const rootReducer = (state = initialState, action) => {
  // Acá va tu código:
  if (action.type === GET_ALL_PRODUCTS)
    state = { ...state, products: action.payload };
  if (action.type === GET_PRODUCT_DETAIL)
    state = { ...state, productDetail: action.payload };
  if (action.type === CREATE_PRODUCT) {
    state = {
      ...state,
      products: [...state.products, createProduct(action.payload).payload],
    };
    state.products[state.products.length - 1].id = state.products.length;
  }
  if (action.type === DELETE_PRODUCT)
    state = {
      ...state,
      products: state.products.filter((state) => state.id !== action.payload),
    };
  return state;
};

export default rootReducer;
