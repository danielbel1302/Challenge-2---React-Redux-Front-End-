import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App(props) {
  return (
    <>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path={"/product/" + props.component.productDetail.id}
        component={ProductDetail}
      />
      <Route exact path="/products/create" component={CreateProduct} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    component: state,
  };
}

export default connect(mapStateToProps)(App);
