import React from "react";
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  actSortProductHigher,
  actSortProductLower,
  actSortProductFit,
  actAddToCart,
  actFetchProductsRequest,
} from "../../redux/actions/actionProducts";

import ProductList from "../../components/ProductList";
import Fillter from "../../components/Fillter";
import Product from "../../components/Product";

// export default function HomePage() {
//   const {
//     fetchProductsSucess,
//     fetchProductsPending,
//     fetchProductsError,
//   } = useSelector((state) => ({
//     fetchProductsSucess: state.products.products,
//     fetchProductsPending: state.products.pending,
//     fetchProductsError: state.products.error,
//   }));

//   const dispatch = useDispatch();

//   const countProduct = fetchProductsSucess.length;

//   const handleSortProduct = (event) => {
//     const val = event.target.value;

//     val === "higher" && dispatch(actSortProductHigher(fetchProductsSucess));
//     val === "lower" && dispatch(actSortProductLower(fetchProductsSucess));
//     val === "fit" && dispatch(actSortProductFit(fetchProductsSucess));
//   };

//   const addToCart = (id) => {
//     const product = fetchProductsSucess.filter((product) => product._id === id);
//     dispatch(actAddToCart(...product));
//   };

//   useEffect(() => {
//     dispatch(actFetchProductsRequest());
//   }, []);

//   const showProductLis = (products) => {
//     let result = null;
//     if (!products.length) return;
//     return (result = products.map((product, index) => (
//       <Product key={product._id} product={product} addToCart={addToCart} />
//     )));
//   };

//   return (
//     <>
//       <Fillter handleSortProduct={handleSortProduct} count={countProduct} />
//       {/* <ProductList
//         productList={fetchProductsSucess}
//         fetchProductsPending={fetchProductsPending}
//         fetchProductsError={fetchProductsError}
//         addToCart={addToCart}
//       /> */}
//       {fetchProductsPending ? (
//         <h1>Loading....</h1>
//       ) : fetchProductsError ? (
//         <h1>Error....</h1>
//       ) : (
//         <ProductList>{showProductLis(fetchProductsSucess)}</ProductList>
//       )}
//     </>
//   );
// }

import { connect } from "react-redux";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  countProduct = this.props.fetchProductsSucess.length;

  addToCart = (id) => {
    const product = this.props.fetchProductsSucess.filter(
      (product) => product._id === id
    );
    this.props.actAddToCart(...product);
  };

  showProductLis = (products) => {
    let result = null;
    if (!products.length) return;
    return (result = products.map((product, index) => (
      <Product key={product._id} product={product} addToCart={this.addToCart} />
    )));
  };

  handleSortProduct = (event) => {
    const val = event.target.value;
    const product = this.props.fetchProductsSucess;

    val === "higher" && this.props.actSortProductHigher(product);
    val === "lower" && this.props.actSortProductLower(product);
    val === "fit" && this.props.actSortProductFit(product);
  };

  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    return (
      <>
        <Fillter
          handleSortProduct={this.handleSortProduct}
          count={this.countProduct}
        />
        {this.props.fetchProductsPending ? (
          <h1>Loading....</h1>
        ) : this.props.fetchProductsError ? (
          <h1>Error....</h1>
        ) : (
          <ProductList>
            {this.showProductLis(this.props.fetchProductsSucess)}
          </ProductList>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchProductsSucess: state.products.products,
    fetchProductsPending: state.products.pending,
    fetchProductsError: state.products.error,
  };
};

const mapDispatchToProps = (dispact) => {
  return {
    actFetchProductsRequest: () => dispact(actFetchProductsRequest()),
    actAddToCart: (product) => dispact(actAddToCart(product)),
    actSortProductHigher: (product) => dispact(actSortProductHigher(product)),
    actSortProductLower: (product) => dispact(actSortProductLower(product)),
    actSortProductFit: (product) => dispact(actSortProductFit(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

HomePage.propTypes = {
  fetchProductsSucess: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      addToCart: PropTypes.func,
      gender: PropTypes.string,
    })
  ).isRequired,
  fetchProductsPending: PropTypes.bool.isRequired,
  fetchProductsError: PropTypes.any,
  actFetchProductsRequest: PropTypes.func,
  actAddToCart: PropTypes.func,
  actSortProductHigher: PropTypes.func,
  actSortProductLower: PropTypes.func,
  actSortProductFit: PropTypes.func,
};
