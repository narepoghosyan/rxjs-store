import { State } from './state';

export const deleteProduct = (config: { id: number }) =>
  ({
    actionName: 'deleteProduct',
    config,
  } as State);
