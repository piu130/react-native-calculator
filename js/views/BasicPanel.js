import React, {Component} from 'react'
import {View} from 'react-native'
import {BasicButton as Button} from '.'

export default class BasicPanel extends Component {
  render () {
    return (
      <View style={{marginTop: 'auto'}}>
        <View style={{flexDirection: 'row'}}>
          <Button title='%' />
          <Button title='&radic;' />
          <Button title='x&sup2;' />
          <Button title={'x' + String.fromCodePoint(0x207b, 0x00b9)} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title='CE' />
          <Button title='C' />
          <Button title='DEL' />
          <Button title='&divide;' />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title='7' />
          <Button title='8' />
          <Button title='9' />
          <Button title='&times;' />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title='4' />
          <Button title='5' />
          <Button title='6' />
          <Button title='&#45;' />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title='1' />
          <Button title='2' />
          <Button title='3' />
          <Button title='&#43;' />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title='&plusmn;' />
          <Button title='0' />
          <Button title='.' />
          <Button title='=' />
        </View>
      </View>
    )
  }
}
