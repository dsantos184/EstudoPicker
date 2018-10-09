/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';


export default class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      selectedKeyPicker:'0',
      estadoPickerData:[
        'Rio de Janeiro',
        'São Paulo',
        'Minas Gerais',
        'Espírito Santo',
        'Ceará',
        'Bahia',
        'Amazonas',
        'Rio de Janeiro',
        'São Paulo',
        'Minas Gerais',
        'Espírito Santo',
        'Ceará',
        'Bahia',
        'Amazonas',
      ]
    }

  }

  render() {

    const pickerItems = this.state.estadoPickerData.map((item, key)=>{
      return(
        <Picker.Item key={key} value={key} label={item} />
      );
    })
    

    return (
      <View style={styles.container}>
        <Picker selectedValue={this.state.selectedKeyPicker} onValueChange={(itemValue, itemIndex)=>{this.setState({selectedKeyPicker:itemValue})}}>
         {pickerItems}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
