import { createStore, applyMiddleware } from 'redux'
import { lanReducer } from './lanReducer'
import { RecommondRedux } from './recommondProd/recommondProdRedux'
import { otherFn } from './otheRedux/index'
import { ListReducer } from './list/listReducer'
import { actionLog } from './middleware/actionLog'
import { TestReducer } from './test/testReducer'
import { produceSlice } from './detail/slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  language: lanReducer,
  recommondProd: RecommondRedux,
  otherFn, ListReducer, TestReducer,
  prodetail: produceSlice.reducer
})
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export default store