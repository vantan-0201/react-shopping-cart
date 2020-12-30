import * as types from "../../contants/actionTypes";

const initialState = {
  products: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export default function CartProducts(state = initialState, action) {
  const duplicateProducts = state.products.slice();
  switch (action.type) {
    case types.ADD_TO_CART:
      var alreadyInCart = false;
      const product = action.product;

      duplicateProducts.forEach((item, index) => {
        if (item._id === product._id) {
          item.count++;
          alreadyInCart = true;
        }
      });

      if (!alreadyInCart) {
        duplicateProducts.push({
          ...product,
          count: 1,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(duplicateProducts));

      return {
        ...state,
        products: duplicateProducts,
      };

    case types.REMOVE_TO_CART:
      const _idProduct = action._id;
      const sliceProduct = duplicateProducts.filter(
        (product) => product._id !== _idProduct
      );
      localStorage.setItem("cartItems", JSON.stringify(sliceProduct));

      return {
        ...state,
        products: sliceProduct,
      };

    case types.REMOVE_TO_ONE_CART:
      duplicateProducts.forEach((item) => {
        if (item._id === action.product._id) {
          if (item.count === 1) return;
          item.count--;
        }
      });

      localStorage.setItem("cartItems", JSON.stringify(duplicateProducts));

      return {
        ...state,
        products: duplicateProducts,
      };

    case types.CHANGE_COUNT_CART:
      console.log(action);

      duplicateProducts.forEach((item) => {
        if (item._id === action.product._id) {
          item.count = action.count;
        }
      });

      return {
        ...state,
        products: duplicateProducts,
      };

    default:
      return state;
  }
}
