import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchList: []
}

export const searchListSlice = createSlice({
  name: 'SearchList',
  initialState,
  reducers: {
   setSearchList: (state, action) => {
      state.searchList = action.payload
    },
  },
})

export const { setSearchList} = searchListSlice.actions


export default searchListSlice.reducer