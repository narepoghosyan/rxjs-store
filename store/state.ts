export const state: State = {
  products: [
    { id: 0, name: 'Product 1', price: '$100' },
    { id: 1, name: 'Product 2', price: '$200' },
    { id: 2, name: 'Product 3', price: '$300' },
  ],
};

export interface State {
  products?: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
}
