import { createContext } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';
import { useReducer, useContext } from 'react';

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
    inStock: faker.number.int(),
    fastDelivery: true,
    ratings: Math.ceil(Math.random() * 5),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
