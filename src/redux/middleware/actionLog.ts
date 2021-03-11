import { Middleware } from 'redux'
export const actionLog: Middleware = (store) => (next) => (action) => {
  // console.log('state 当前', store.getState().ListReducer.lan);
  // console.log('fire action', action);
  next(action)
  // console.log('state更改后的', store.getState().ListReducer.lan);
}