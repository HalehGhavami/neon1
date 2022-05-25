import { Component } from 'react';
import './product.css';

export default class Product extends Component {
  //adding count attribute for be able using it anywhere in our class
  count = 5;
  imageUrl = 'https://picsum.photos/200';
  render() {
    // const count = 0;
    const list = ['Item one ', 'Item two', 'Item three'];
    //map method for converting an array of strings to an array of element
    const listmap = list.map((item, index) => <li key={index}>{item}</li>);
    return (
      <>
        <span className="m-2 text-info">Product Name</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button
          onClick={this.handleIncrement.bind(this)}
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
        <ul>{listmap}</ul>
        <img src={this.imageUrl} alt="random foto" />
      </>
    );
  }

  handleIncrement() {
    console.log('Increment', this);
  }

  handleDecrement() {
    console.log('Decrement');
  }

  handleDelete() {
    console.log('Delete');
  }

  format() {
    if (this.count === 0) {
      return 'zero';
    } else {
      return this.count;
    }
  }
}
