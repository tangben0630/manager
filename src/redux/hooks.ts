import { RootState } from './store';
import { useSelector as useaaa, TypedUseSelectorHook } from 'react-redux'
import { LanState } from './lanReducer'

export const useSelector2: TypedUseSelectorHook<RootState> = useaaa
export const useSelector: TypedUseSelectorHook<LanState> = useaaa

