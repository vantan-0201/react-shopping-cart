import * as types from "../../contants/actionTypes";

const initialState = {
  products: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

// const findIndex = (cart, product) => {
//   let index = -1;
//   if (!cart.length) return;
//   cart.forEach((item, i) => {
//     if (item.id === product) {
//       index = i;
//     }
//   });
//   return index;
// };

export default function CartProducts(state = initialState, action) {
  let duplicateProducts = state.products.slice();
  switch (action.type) {
    case types.ADD_TO_CART:
      var alreadyInCart = false;
      const product = action.product;

      duplicateProducts.forEach((item, index) => {
        if (item.id === product.id) {
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
      const idProduct = action.id;
      const sliceProduct = duplicateProducts.filter(
        (product) => product.id !== idProduct
      );
      localStorage.setItem("cartItems", JSON.stringify(sliceProduct));

      return {
        ...state,
        products: sliceProduct,
      };

    case types.REMOVE_TO_ONE_CART:
      duplicateProducts.forEach((item) => {
        if (item.id === action.product.id) {
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
      duplicateProducts.forEach((item) => {
        if (item.id === action.product.id) {
          item.count = Number(action.count);
        }
      });

      return {
        ...state,
        products: duplicateProducts,
      };

    case types.REMOVE_COUNT_CART:
      duplicateProducts.forEach((item) => {
        if (item.id === action.product.id) {
          if (item.count < 10) item.count = 0;
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
