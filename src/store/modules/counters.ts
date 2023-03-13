import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: 'hahah'
  },
  reducers: {
    changeNameAction(state, { payload }) {
      state.name = payload
    }
  }
})

export const { changeNameAction } = counterSlice.actions
export default counterSlice.reducer
