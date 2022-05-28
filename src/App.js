import { Component } from 'react';
import Navbar from './components/navbar';
import Products from './components/products';

class App extends Component {
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
        {/* share state between 2 sibling component is not possible */}
        {/* passing states as props to 2 siblings component */}
        <Navbar products={this.state.products} />
        <Products
          products={this.state.products}
          onDelete={this.handelDelete}
          onIncrement={this.handelIncrement}
          onDecrement={this.handelDecrement}
          onReset={this.handleReset}
        />
      </>
    );
  }
  handelDelete = (productId) => {
    const newProducts = this.state.products.filter(
      (product) => product.id !== productId
    );
    this.setState({ products: newProducts });
  };

  handleReset = () => {
    const newProducts = this.state.products.map((product) => {
      product.count = 0;
      return product;
    });
    this.setState({ products: newProducts });
  };

  handelIncrement = (productId) => {
    //make a copy of our products
    const newProducts = [...this.state.products];
    //search in newProducts array to find the index of selected productId
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  handelDecrement = (productId) => {
    //make a copy of our products
    const newProducts = [...this.state.products];
    //search in newProducts array to find the index of selected productId
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };
}

export default App;
