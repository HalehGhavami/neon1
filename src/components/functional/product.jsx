import { useState } from 'react';

const Product = ({ productName }) => {
  const [count, setCount] = useState(0);
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
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleDelete() {
    console.log('Delete');
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
