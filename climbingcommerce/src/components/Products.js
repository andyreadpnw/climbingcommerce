import React, { Component } from "react";

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map((product) => (
      <div classname="col-md-4">
        <div classname="thumbnail text-center">
          <a href={`#${product.id}`} onClick={this.props.handleAddToCard}>
            <img src={`/products/${product.sku}.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
        </div>
      </div>
    ));

    return <div>{productItems}</div>;
  }
}
