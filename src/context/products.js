//Context is primarily used when some data needs to be accessible by many components at different nesting levels.
import { createContext } from 'react';

const productContext = createContext();

export default productContext;
