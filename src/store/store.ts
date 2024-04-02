import { configureStore } from '@reduxjs/toolkit'
import isOpenModelSlice from './isOpenModalSlice'
import validFormSlice from './validFormSlice'

export const store = configureStore({
  reducer: {
    counter: isOpenModelSlice,
    validFormSlice: validFormSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch