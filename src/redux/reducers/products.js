import * as types from "../../contants/actionTypes";

const getProducts = {
  pending: false,
  products: [
    {
      _id: "sterling",
      name: "sterling",
      gender: "male",
      description: "about watches",
      price: 10000,
      availableSizes: ["42,40"],
      img:
        "https://curnonwatch.com/media/catalog/product/b/x/bx.grand.png?auto=webp&format=png&width=1600&height=1600&fit=cover&method=fit&nocrop=true",
    },
    {
      _id: "grand",
      name: "grand",
      gender: "male",
      description: "about watches",
      price: 20000000,
      availableSizes: ["42,40"],
      img:
        "https://curnonwatch.com/media/catalog/product/b/x/bx.grand.png?auto=webp&format=png&width=1600&height=1600&fit=cover&method=fit&nocrop=true",
    },
    {
      _id: "thunder",
      name: "thunder",
      gender: "male",
      description: "about watches",
      price: 300000,
      availableSizes: ["42,40"],
      img:
        "https://curnonwatch.com/media/catalog/product/b/x/bx.grand.png?auto=webp&format=png&width=1600&height=1600&fit=cover&method=fit&nocrop=true",
    },
    {
      _id: "paul",
      name: "paul",
      gender: "male",
      description: "about watches",
      price: 300000,
      availableSizes: ["42,40"],
      img:
        "https://curnonwatch.com/media/catalog/product/b/x/bx.grand.png?auto=webp&format=png&width=1600&height=1600&fit=cover&method=fit&nocrop=true",
    },
    {
      _id: "haze",
      name: "haze",
      gender: "famale",
      description: "about watches",
      price: 400000,
      availableSizes: ["42,40"],
      img:
        "https://curnonwatch.com/media/catalog/product/b/x/bx.grand.png?auto=webp&format=png&width=1600&height=1600&fit=cover&method=fit&nocrop=true",
    },
    {
      _id: "cora",
      name: "cora",
      gender: "famale",
      description: "about watches",
      price: 20000000,
      availableSizes: ["42,40"],
      img:
        "https://curnonwatch.com/media/catalog/product/b/x/bx.grand.png?auto=webp&format=png&width=1600&height=1600&fit=cover&method=fit&nocrop=true",
    },
  ],
  error: null,
};

export default function products(state = getProducts, action) {
  switch (action.type) {
    case types.GET_PRODUCT_PENDDING:
      return {
        ...state,
        pending: true,
      };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...action.products],
        pending: false,
      };

    case types.GET_PRODUCT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case types.SORT_PRODUCTS_FIT:
      return {
        ...state,
      };

    case types.SORT_PRODUCTS_HIGHER:
      const sortHigher = state.products.slice().sort((a, b) => {
        return a.price - b.price;
      });
      return {
        ...state,
        products: [...sortHigher],
      };

    case types.SORT_PRODUCTS_LOWER:
      const sortLower = state.products.slice().sort((a, b) => {
        return b.price - a.price;
      });

      return {
        ...state,
        products: [...sortLower],
      };

    default:
      return state;
  }
}
