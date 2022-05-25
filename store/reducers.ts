import { Product, state } from './state';

export const deleteProduct = (config: Product) => {
  return {
    ...state,
    products: state.products?.filter((product) => product.id != config.id),
  };
};
