import { useState } from 'react';

const Product = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <span className="m-2 text-info">Product Name</span>
      <span className="m-2 badge bg-primary">{format()}</span>
      {/* handleIncrement function is defined out of scope */}
      <button
        onClick={() => {
          handleIncrement(count, setCount);
        }}
        className="m-2 btn btn-sm btn-success"
      >
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
    </>
  );

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

//function out of scope
function handleIncrement(count, setCount) {
  //
  setCount(count + 1);
}

export default Product;
