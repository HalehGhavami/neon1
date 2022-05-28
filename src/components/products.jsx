import { Component } from 'react';
import Product from './product';
import ProductContext from '../context/products';

export default class Products extends Component {
  static contextType = ProductContext;
  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.context.onReset}>
          Reset
        </button>
        {this.context.products.map((product, index) => (
          <Product
            key={index}
            productName={product.productName}
            //sending count as props
            count={product.count}
            //passing handelDelete method as props

            id={product.id}
          />
        ))}
      </>
    );
  }
}
