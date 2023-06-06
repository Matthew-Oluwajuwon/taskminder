import { setTheme, themeReducer } from "./slice/theme"
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit"
import { authReducer, setAuthState, setField } from "./slice/auth"
import {
  globalReducer,
  setAllGlobalState,
  setGlobalState,
} from "./slice/global"

const reducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
  theme: themeReducer,
})

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat()
  },
})

export { setField, setAuthState, setGlobalState, setAllGlobalState, setTheme }

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
