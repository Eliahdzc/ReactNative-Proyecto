import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  localId: null,
  imageCamera: null,
  userName: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log('payload >>>', action.payload)
      return Object.assign(
        state,
        {
          user: action.payload.email,
          token: action.payload.idToken,
          localId: action.payload.localId,
          userName: action.payload.userName
        },
      )
    },
    clearUser: () => {
      return { user: null, token: null, localId: null }
    },
    setCameraImage: (state, action) => {
      return {
        ...state,
        imageCamera: action.payload,
      }
    },
  },
})

export const { setUser, clearUser, setCameraImage } = authSlice.actions

export default authSlice.reducer
