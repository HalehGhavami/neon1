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
            //passing handelDelete method as props
            onDelete={this.handelDelete}
            id={product.id}
          />
        ))}
      </>
    );
  }
  handelDelete = (productId) => {
    const newProducts = this.state.products.filter(
      (product) => product.id !== productId
    );
    this.setState({ products: newProducts });
  };
}
