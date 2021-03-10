const _state = {
  name: 'nihao',
  nihao: '000'
}
interface Actions {
  type: string,
  value: any
}
export const reducer = (state = _state, action: Actions) => {
  const newState = {
    ...state,
    nihao: ''
  }
  if (action.type === 'aaa') {

    newState.nihao = action.value
    console.log(newState, 'jinlaile');
    return newState
  }
  return state
}