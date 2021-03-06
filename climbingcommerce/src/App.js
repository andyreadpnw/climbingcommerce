import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
          filteredProducts: data,
        })
      );
  }

  render() {
    return (
      <div className="container">
        <h1>Andy's Climbing Adventures</h1>
        <hr />
        <div classname="row">
          <div classname="col-md-8">
            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div classname="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
