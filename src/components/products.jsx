import { Component } from 'react';
import Product from './product';

export default class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        count: 2,
        productName: 'laptop',
      },
      {
        id: 2,
        count: 4,
        productName: 'mobile',
      },
      {
        id: 3,
        count: 5,
        productName: 'airpod',
      },
    ],
  };
  render() {
    return (
      <>
        {this.state.products.map((product, index) => (
          <Product
            key={index}
            productName={product.productName}
            //sending count as props
            count={product.count}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            accumsan in nisl nisi scelerisque.
          </Product>
        ))}
      </>
    );
  }
}
