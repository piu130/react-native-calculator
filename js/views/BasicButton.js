import React, {Component} from 'react'
import {Button} from 'react-native-elements'

export default class NumberPanelButton extends Component {
  render () {
    const {buttonStyle, containerStyle, ...rest} = this.props
    return (
      <Button
        buttonStyle={{
          borderRadius: 0,
          ...buttonStyle
        }}
        containerStyle={{
          flex: 1,
          ...containerStyle
        }}
        {...rest}
      />
    )
  }
}
