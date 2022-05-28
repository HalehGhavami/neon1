const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="foo" className="navbar-brand">
          Navbar{calculateSum()}
        </a>
      </div>
    </nav>
  );
  function calculateSum() {
    let sum = 0;
    //can use radius method or forEach
    props.products.forEach((product) => {
      sum += product.count;
    });
    return sum;
  }
};

export default Navbar;
