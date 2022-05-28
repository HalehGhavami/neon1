import { Component } from 'react';
import Navbar from './components/navbar';
import Products from './components/products';
import ProductContext from './context/products';

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
      <ProductContext.Provider
        value={{
          products: this.state.products,
          onDelete: this.handleDelete,
          onIncrement: this.handleIncrement,
          onDecrement: this.handleDecrement,
          onReset: this.handleReset,
        }}
      >
        <Navbar />
        <Products />
      </ProductContext.Provider>
    );
  }
  handleDelete = (productId) => {
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

  handleIncrement = (productId) => {
    //make a copy of our products
    const newProducts = [...this.state.products];
    //search in newProducts array to find the index of selected productId
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  handleDecrement = (productId) => {
    //make a copy of our products
    const newProducts = [...this.state.products];
    //search in newProducts array to find the index of selected productId
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };
}

export default App;
