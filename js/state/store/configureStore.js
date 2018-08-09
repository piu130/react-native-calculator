import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/es/storage'
import reducers from '../reducers'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = [thunk, logger]

const enhancer = compose(applyMiddleware(...middleware))

export default () => {
  const store = createStore(persistedReducer, undefined, enhancer)
  const persistor = persistStore(store)
  return {store, persistor}
}
