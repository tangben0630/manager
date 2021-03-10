import { FAIL, RecommondActions, START, SUCCESS } from './recommondActions'

interface RecoProdState {
  productList: any[],
  loading?: Boolean,
  error?: string | null
}

const defaultValue: RecoProdState = {
  productList: [],
  loading: true,
  error: null
}

export const RecommondRedux = (state = defaultValue, action: RecommondActions) => {
  switch (action.type) {
    case START:
      return {
        ...state, loading: true
      }
    case SUCCESS:
      return {
        ...state, loading: false,
        productList: action.payload
      }
    case FAIL:
      return {
        ...state, loading: false,
        error: action.payload
      }

    default:
      return state
  }
}