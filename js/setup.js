/**
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react'
import configureStore from './state/store/configureStore'
import CalculatorApp from './CalculatorApp'

const {persistor, store} = configureStore()

type Props = {}
export default class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CalculatorApp />
        </PersistGate>
      </Provider>
    )
  }
}
