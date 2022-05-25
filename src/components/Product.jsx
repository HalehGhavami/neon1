import { Component } from 'react';

export default class Product extends Component {
  render() {
    // const count = 2;
    const list = ['Item one ', 'Item two', 'Item three'];
    //map method for converting an array of strings to an array of element
    const listmap = list.map((item) => <li>item</li>);
    return (
      <>
        <span className="m-2 text-info">Product Name</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button className="m-2 btn btn-sm btn-success">+</button>
        <button className="m-2 btn btn-sm btn-warning">-</button>
        <button className="m-2 btn btn-sm btn-danger">Delete</button>
        <ul>{listmap}</ul>
      </>
    );
  }
  format() {
    return 2 + 2;
  }
}
