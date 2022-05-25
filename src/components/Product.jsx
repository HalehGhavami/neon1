import { Component } from 'react';
import './product.css';

export default class Product extends Component {
  //adding state attribute to change our stateless component to stateful component
  state = {
    count: 5,
    imageUrl: 'https://picsum.photos/200',
    productName: 'laptop',
  };

  //adding count attribute for be able using it anywhere in our class

  render() {
    // const count = 0;
    const list = ['Item one ', 'Item two', 'Item three'];
    //map method for converting an array of strings to an array of element
    const listmap = list.map((item, index) => <li key={index}>{item}</li>);
    return (
      <>
        <span className="m-2 text-info">{this.state.productName}</span>
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
        <ul>{listmap}</ul>
        <img src={this.state.imageUrl} alt="random foto" />
      </>
    );
  }

  handleIncrement = () => {
    //never change state directly !! use setState that is a method, inheritated from Component
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    console.log('Decrement');
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
}
