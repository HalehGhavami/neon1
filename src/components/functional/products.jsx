import Product from './product';
import { useContext } from 'react';
import ProductContext from '../../context/products';

const Products = (props) => {
  const productContext = useContext(ProductContext);
  return (
    <>
      <button className="btn btn-primary" onClick={productContext.onReset}>
        Reset
      </button>
      {productContext.products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          //sending count as props
          count={product.count}
          id={product.id}
        />
      ))}
    </>
  );
};

export default Products;
