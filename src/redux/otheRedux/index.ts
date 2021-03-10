export const AAA = 'AAA'

interface State {
  name: string
}
const defaultState: State = {
  name: '校名'
}

export const otherFn = (state = defaultState, action) => {
  if (action.type === AAA) {
    console.log('jinlai');

    return {
      name: '22校名'
    }
  }
  return state
}




