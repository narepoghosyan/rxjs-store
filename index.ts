import { $products, myState } from './store/selectors';

import { Product } from './store/state';

let products: Product[];
const productsTable = document.querySelector('#productsTable');

const showProducts = (productss: Product[]) => {
  productss.forEach(({ id, name, price }) => {
    const tr = document.createElement('tr');
    const firstColumn = document.createElement('td');
    const secondColumn = document.createElement('td');
    const thirdColumn = document.createElement('td');
    const fourthColumn = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.append('Delete');
    deleteButton.addEventListener('click', function () {
      const newPorducts = myState.dispatch({
        actionName: 'deleteProduct',
        config: { id },
      });
      productsTable.innerHTML = '';
      showProducts(products);
    });
    firstColumn.append(id.toString());
    secondColumn.append(name);
    thirdColumn.append(price);
    fourthColumn.append(deleteButton);
    tr.append(firstColumn);
    tr.append(secondColumn);
    tr.append(thirdColumn);
    tr.append(fourthColumn);
    productsTable.append(tr);
  });
};

$products.subscribe((data: Product[]) => {
  products = data;
  productsTable.innerHTML = '';
  showProducts(data);
});
