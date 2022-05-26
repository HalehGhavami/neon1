import { Component } from 'react';
import Product from './product';

export default class Products extends Component {
  render() {
    return (
      <>
        <Product />
        <Product />
        <Product />
      </>
    );
  }
}
