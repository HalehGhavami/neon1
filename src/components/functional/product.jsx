import { useContext, useEffect } from 'react';
import ProductContext from '../../context/products';

const Product = ({ productName, count, id }) => {
  const productContext = useContext(ProductContext);

  //useEffect that return a funcation is used for unMount phase
  useEffect(() => {
    return () => {
      console.log('Product - unMount');
    };
  }, []);
  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{format()}</span>
      {/* handleIncrement function is defined out of scope */}
      <button onClick={handleIncrement} className="m-2 btn btn-sm btn-success">
        +
      </button>
      <button onClick={handleDecrement} className="m-2 btn btn-sm btn-warning">
        -
      </button>
      <button
        onClick={() => {
          handleDelete();
        }}
        className="m-2 btn btn-sm btn-danger"
      >
        Delete
      </button>
    </div>
  );

  function handleIncrement() {
    productContext.onIncrement(id);
  }

  function handleDecrement() {
    productContext.onDecrement(id);
  }

  function handleDelete() {
    productContext.onDelete(id);
  }

  function format() {
    if (count === 0) {
      return 'zero';
    } else {
      return count;
    }
  }
};

export default Product;
