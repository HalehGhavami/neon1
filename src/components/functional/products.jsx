import Product from './product';
import { useState } from 'react';

const Products = () => {
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
      {products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          //sending count as props
          count={product.count}
          onDelete={handelDelete}
          id={product.id}
        />
      ))}
    </>
  );
  function handelDelete(productId) {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  }
};

export default Products;
