import Product from './product';

const Products = ({
  onReset,
  onDelete,
  onIncrement,
  onDecrement,
  products,
}) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onReset}>
        Reset
      </button>
      {products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          //sending count as props
          count={product.count}
          onDelete={onDelete}
          id={product.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </>
  );
};

export default Products;
