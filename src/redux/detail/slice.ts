import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
interface ProdState {
  loading: boolean,
  error: string,
  data: any
}
const initialState: ProdState = {
  loading: true,
  error: 'none',
  data: []
}

export const getProdetail = createAsyncThunk(
  'aaa/bbb',
  async (id: string, thunkApi) => {
    // thunkApi.dispatch(produceSlice.actions.start())
    const { data } = await axios.get('http://123.56.149.216:8080/api/touristRoutes/' + id, {
      headers: {
        'x-icode': '3D50B8E3B1DFC232'
      }
    })
    return data
  }
)

export const produceSlice = createSlice({
  name: 'prodetail',//命名空间
  initialState,//初始化数据
  reducers: {//结合 action跟reducer的功能
    start: (state) => {
      // return {     这是以前的写法
      //   ...state,
      //   loading: true
      // }
      state.loading = true
    },
    success: (state, action) => {
      const err = action.payload
      state.loading = false
      state.data = err
    },
    fail: (state, action) => {
      const err = action.payload
      state.loading = false
      state.error = err
    }
  },
  extraReducers: {
    [getProdetail.pending.type]: (state, action) => {
      console.log(state, 'state');
      state.loading = true
    },
    [getProdetail.fulfilled.type]: (state, action) => {
      const err = action.payload
      state.loading = false
      state.data = err
    },
    [getProdetail.rejected.type]: (state, action) => {
      const err = action.payload
      state.loading = false
      state.error = err
    },
  }
})