import { Component } from 'react';

export default class Product extends Component {
  //adding count attribute for be able using it anywhere in our class
  count = 0;
  render() {
    // const count = 0;
    const list = ['Item one ', 'Item two', 'Item three'];
    //map method for converting an array of strings to an array of element
    const listmap = list.map((item, index) => <li key={index}>{item}</li>);
    return (
      <>
        {this.count !== 0 ? (
          <>
            <span className="m-2 text-info">Product Name</span>
            <span className="m-2 badge bg-primary">
              {this.count === 0 ? 'zero' : this.count}
            </span>
            <button className="m-2 btn btn-sm btn-success">+</button>
            <button className="m-2 btn btn-sm btn-warning">-</button>
            <button className="m-2 btn btn-sm btn-danger">Delete</button>
            <ul>{listmap}</ul>
          </>
        ) : (
          <h1>There is no product</h1>
        )}
      </>
    );
  }
  //   format() {
  //     if (this.count === 0) {
  //       return 'zero';
  //     } else {
  //       return this.count;
  //     }
  //   }
}
