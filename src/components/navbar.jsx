import { Component } from 'react';
import ProductContext from '../context/products';

class Navbar extends Component {
  //activated this.context
  static contextType = ProductContext;
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="foo" className="navbar-brand">
            Navbar{this.calculateSum()}
          </a>
        </div>
      </nav>
    );
  }
  calculateSum = () => {
    let sum = 0;
    //can use radius method or forEach
    this.context.products.forEach((product) => {
      sum += product.count;
    });
    return sum;
  };
}

export default Navbar;
