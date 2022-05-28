import { Component } from 'react';
import Product from './product';

export default class Products extends Component {
  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.products.map((product, index) => (
          <Product
            key={index}
            productName={product.productName}
            //sending count as props
            count={product.count}
            //passing handelDelete method as props
            onDelete={this.props.onDelete}
            id={product.id}
            //passing methods as props
            onIncerement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </>
    );
  }
}
