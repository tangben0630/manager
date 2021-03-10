
export interface Test {
  name: string,
  age: number
}

const defaultState: Test = {
  name: 'test数据',
  age: 8
}


export const TestReducer = (state = defaultState, action) => {
  console.log('123', action);
  if (action.type === 'ADDSIGN') {
    return {
      ...state,
      name: '改变的'
    }
  }
  return state
}