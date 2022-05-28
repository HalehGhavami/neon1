import { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="foo" className="navbar-brand">
            Navbar{5}
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
