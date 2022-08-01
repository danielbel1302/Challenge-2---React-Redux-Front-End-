import React, { Component } from "react";
import { connect } from "react-redux";
import mainImage from "../../img-cp2/main-image-cp2.jpg";
import { getAllProducts } from "../../redux/actions";
import ProductCard from "../ProductCard/ProductCard";

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Henry Commerce</h1>
        <img src={mainImage} alt="main-img" />
        <h3>Products</h3>
        {this.props.products !== undefined
          ? this.props.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                price={product.price}
                name={product.name}
                stock={product.stock}
              />
            ))
          : null}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({ products: state.products });

export const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
