import React, {Component} from 'react'
import {View} from 'react-native'
import {BasicPanel} from './views'

export default class CalculatorApp extends Component {
  render () {
    return (
      <View style={{height: '100%'}}>
        <BasicPanel />
      </View>
    )
  }
}
