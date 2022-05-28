import Products from './products';
import Navbar from './navbar';
import { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([
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
  ]);
  return (
    <>
      <Navbar products={products} />
      <Products
        products={products}
        onDelete={handelDelete}
        onIncrement={handelIncrement}
        onDecrement={handelDecrement}
        onReset={handleReset}
      />
    </>
  );

  function handelDelete(productId) {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  }

  function handleReset() {
    const newProducts = products.map((product) => {
      product.count = 0;
      return product;
    });
    setProducts(newProducts);
  }

  function handelIncrement(productId) {
    //make a copy of our products
    const newProducts = [...products];
    //search in newProducts array to find the index of selected productId
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }

  function handelDecrement(productId) {
    //make a copy of our products
    const newProducts = [...products];
    //search in newProducts array to find the index of selected productId
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }
};

export default App;
