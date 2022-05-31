import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer';
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const preloadedState = {}
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        thunk: false
      }).concat(sagaMiddleware),        
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
})

// @ts-ignore TODO: resolve 
store.sagaTask = sagaMiddleware.run(rootSaga)
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store