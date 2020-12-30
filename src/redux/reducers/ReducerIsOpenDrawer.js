import * as types from "../../contants/actionTypes";

const initialState = {
  menuMb: false,
  cart: false,
};

export default function isOpenDrawer(state = initialState, action) {
  switch (action.type) {
    case types.CLOSE_CART:
      return {
        ...state,
        [action.element]: false,
      };

    case types.OPEN_CART:
      const { element } = action;
      return {
        ...state,
        [element]: true,
      };

    default:
      return state;
  }
}
