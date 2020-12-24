import * as types from "../../contants/actionTypes";

const cartData = {
  products: [],
};

export default function CartProducts(state = cartData, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      const newProduct = action.products;
      return {
        ...state,
        products: state.products.concat(newProduct),
      };

    case types.REMOVE_TO_CART:
      const _idProduct = action._id;
      const sliceProduct = state.products.filter(
        (product, index) => index !== _idProduct
      );
      return {
        ...state,
        products: sliceProduct,
      };

    default:
      return state;
  }
}
