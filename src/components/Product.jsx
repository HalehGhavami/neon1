import { Component } from 'react';
import './product.css';

export default class Product extends Component {
  //Delete count state here and receive it as props instead

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
          onClick={this.handleDelete}
          className="m-2 btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.props.onIncerement(this.props.id);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.id);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  //receiving count through props instead of state in this component
  format() {
    if (this.props.count === 0) {
      return 'zero';
    } else {
      return this.props.count;
    }
  }
}
