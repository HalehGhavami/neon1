const Product = () => {
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
    handleIncrement = () => {
    // const count = this.state.count;

    //object Destructuring
    const { count } = this.state;

    //never change state directly !! use setState that is a method, inheritated from Component
    this.setState({
      count: count + 1,
    });
  };

  handleDecrement = () => {
    const { count } = this.state;

    this.setState({
      count: count - 1,
    });
  };

  handleDelete = (itemNumber) => {
    console.log(itemNumber);
  };

  format() {
    if (this.state.count === 0) {
      return 'zero';
    } else {
      return this.state.count;
    }
  }
};

export default Product;
