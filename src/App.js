import { Component } from 'react';
import Navbar from './components/navbar';
import Products from './components/products';
import ProductContext from './context/products';

class App extends Component {
  //Mount phase
  //don't have access to props directly through constructor then we have to pass props
  //constructor calls just 1 time !! we can not call setSate here because setSate will call after we called render
  constructor(props) {
    super(props);
    console.log('App - Constructor');
  }

  // 3rd phase : our component is in DOM tree => is good to use for ajax and http request to server
  componentDidMount() {
    console.log('App - DidMount');
  }

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

  //2nd phase => from here we can use setSate
  //when render is called all its inside children will return too
  render() {
    console.log('App - render');
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
