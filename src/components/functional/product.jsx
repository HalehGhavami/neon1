import { useState } from 'react';

const Product = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <span className="m-2 text-info">Product Name</span>
      <span className="m-2 badge bg-primary">{this.format()}</span>
      <button
        onClick={this.handleIncrement}
        className="m-2 btn btn-sm btn-success"
      >
        +
      </button>
      <button
        onClick={this.handleDecrement}
        className="m-2 btn btn-sm btn-warning"
      >
        -
      </button>
      <button
        onClick={() => {
          this.handleDelete(55);
        }}
        className="m-2 btn btn-sm btn-danger"
      >
        Delete
      </button>
    </>
  );
  function handleIncrement() {
    //
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleDelete(itemNumber) {
    console.log(itemNumber);
  }

  function format() {
    if (this.state.count === 0) {
      return 'zero';
    } else {
      return this.state.count;
    }
  }
};

export default Product;
