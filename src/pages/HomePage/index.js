import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";

import {
  actAddToCart,
  actFetchProductsRequest,
} from "../../redux/actions/actionProducts";

import ProductList from "../../components/ProductList";
import Product from "../../components/Product";
import Sellers from "../../components/Sellers";
import Loading from "../../components/Loading";

export default function HomePage() {
  const {
    fetchProductsSucess,
    // fetchProductsPending,
    // fetchProductsError,
  } = useSelector((state) => ({
    fetchProductsSucess: state.products.products,
    // fetchProductsPending: state.products.pending,
    // fetchProductsError: state.products.error,
  }));

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const addToCart = (id) => {
    const product = fetchProductsSucess.filter((product) => product.id === id);
    dispatch(actAddToCart(...product));
  };

  useEffect(() => {
    dispatch(actFetchProductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let loading;
    const showLoading = () => {
      loading = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    showLoading();
    return () => {
      clearTimeout(loading);
    };
  }, []);

  const showProductList = (products) => {
    let result = null;
    if (!products.length) return;
    result = products.map((product) => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ));
    return result;
  };

  const filterProductGender = (products, gender) => {
    return products.filter(
      (product, index) => product.gender === gender && index < 5
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <Sellers title="MEN'S BEST SELLERS">
            <ProductList>
              {showProductList(
                filterProductGender(fetchProductsSucess, "male")
              )}
            </ProductList>
          </Sellers>
          <Sellers title="WOMEN'S BEST SELLERS">
            <ProductList>
              {showProductList(
                filterProductGender(fetchProductsSucess, "famale")
              )}
            </ProductList>
          </Sellers>
        </section>
      )}
    </>
  );
}

// import { connect } from "react-redux";

// export class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   addToCart = (id) => {
//     const product = this.props.fetchProductsSucess.filter(
//       (product) => product.id === id
//     );
//     this.props.actAddToCart(...product);
//   };

//   showProductList = (products) => {
//     let result = null;
//     if (!products.length) return;
//     return (result = products.map((product, index) => (
//       <Product key={product.id} product={product} addToCart={this.addToCart} />
//     )));
//   };

//   handleSortProduct = (event) => {
//     const val = event.target.value;
//     const product = this.props.fetchProductsSucess;

//     val === "higher" && this.props.actSortProductHigher(product);
//     val === "lower" && this.props.actSortProductLower(product);
//     val === "fit" && this.props.actSortProductFit(product);
//   };

//   componentDidMount() {
//     this.props.actFetchProductsRequest();
//   }

//   render() {
//     const countProduct = this.props.fetchProductsSucess.length;

//     return (
//       <>
//         <Fillter
//           handleSortProduct={this.handleSortProduct}
//           count={countProduct}
//         />
//         {this.props.fetchProductsPending ? (
//           <h1>Loading....</h1>
//         ) : this.props.fetchProductsError ? (
//           <h1>Error....</h1>
//         ) : (
//           <ProductList>
//             {this.showProductList(this.props.fetchProductsSucess)}
//           </ProductList>
//         )}
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     fetchProductsSucess: state.products.products,
//     fetchProductsPending: state.products.pending,
//     fetchProductsError: state.products.error,
//   };
// };

// const mapDispatchToProps = (dispact) => {
//   return {
//     actFetchProductsRequest: () => dispact(actFetchProductsRequest()),
//     actAddToCart: (product) => dispact(actAddToCart(product)),
//     actSortProductHigher: (product) => dispact(actSortProductHigher(product)),
//     actSortProductLower: (product) => dispact(actSortProductLower(product)),
//     actSortProductFit: (product) => dispact(actSortProductFit(product)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// HomePage.propTypes = {
//   fetchProductsSucess: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string,
//       addToCart: PropTypes.func,
//       gender: PropTypes.string,
//     })
//   ).isRequired,
//   fetchProductsPending: PropTypes.bool.isRequired,
//   fetchProductsError: PropTypes.any,
//   actFetchProductsRequest: PropTypes.func,
//   actAddToCart: PropTypes.func,
//   actSortProductHigher: PropTypes.func,
//   actSortProductLower: PropTypes.func,
//   actSortProductFit: PropTypes.func,
// };
