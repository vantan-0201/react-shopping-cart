import * as types from "../../contants/actionTypes";

const cartData = {
  products: [],
};

export default function CartProducts(state = cartData, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      var alreadyInCart = false;
      let newProducts = state.products.slice();
      const product = action._id;

      newProducts.forEach((item, index) => {
        if (item._id === product._id) {
          item.count++;
          alreadyInCart = true;
        }
      });

      if (!alreadyInCart) {
        newProducts.push({
          ...product,
          count: 1,
        });
      }

      return {
        ...state,
        products: newProducts,
      };

    case types.REMOVE_TO_CART:
      const _idProduct = action._id;
      const sliceProduct = state.products.filter(
        (product, index) => product._id !== _idProduct
      );

      return {
        ...state,
        products: sliceProduct,
      };

    case types.REMOVE_TO_ONE_CART:
      let products_copy = state.products.slice();

      products_copy.forEach((item, index) => {
        if (item._id === action._id._id) {
          item.count > 1 && item.count--;
        }
      });

      return {
        ...state,
        products: products_copy,
      };

    default:
      return state;
  }
}
