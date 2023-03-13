import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import counterSlice from './modules/counters'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    recommend: recommendReducer
  }
})

type GetStateFnType = typeof store.getState //拿到函数类型
type IRootState = ReturnType<GetStateFnType> //拿到函数返回值类型
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
