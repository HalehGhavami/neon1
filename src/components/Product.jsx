import { Component } from 'react';
import './product.css';

export default class Product extends Component {
  //adding state attribute to change our stateless component to stateful component
  state = {
    count: this.props.count,
  };

  //adding count attribute for be able using it anywhere in our class

  render() {
    //props destructuring
    const { productName } = this.props;
    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
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
            this.handleDelete();
          }}
          className="m-2 btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }

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

  handleDelete = () => {
    console.log('Delete');
  };

  format() {
    if (this.state.count === 0) {
      return 'zero';
    } else {
      return this.state.count;
    }
  }
}
