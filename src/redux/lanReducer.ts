
export interface LanState {
  language: {
    languageList: { name: string, code: string }[]
    language: string,
  }
}
const defaultState: LanState = {
  language: {
    language: 'zh',
    languageList: [
      { name: '中文', code: 'zh' },
      { name: '英文', code: 'en' },
    ]
  }
}

export const lanReducer = (state = defaultState, action) => {
  //state: reducer是数据处理的过程，state是store中的上一次的数据，旧数据
  //action: 通过action的指令，对数据进行更改，产生新的数据
  const newState = {
    ...state,
  }
  if (action.type === 'aaa') {

    newState.language = action.value
    return newState
  }
  return state
}