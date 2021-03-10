
import { CH, changeType } from './listActions'

export interface State {
  lan: string,
  lanList: { name: string, code: number }[]
}



const defaultState: State = {
  lan: 'zh',
  lanList: [
    { name: '中文', code: 1 },
    { name: '英文', code: 2 },
  ]
}



export const ListReducer = (state = defaultState, action: changeType) => {
  if (action.type === CH) {
    return {
      ...state,
      lan: action.payload
    }
  }

  return state
}