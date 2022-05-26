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
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            accumsan in nisl nisi scelerisque.
          </p>
        </Product>
      ))}
    </>
  );
};

export default Products;
