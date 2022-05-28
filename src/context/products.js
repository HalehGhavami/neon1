//Context is primarily used when some data needs to be accessible by many components at different nesting levels.
import { createContext } from 'react';

const ProductContext = createContext({
  //optional !! just to know what we have in context
  products: [],
  onDelete: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
  onReset: () => {},
});

export default ProductContext;
