import { Component } from 'react';
import Navbar from './components/navbar';
import Products from './components/products';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Products />
      </>
    );
  }
}

export default App;
