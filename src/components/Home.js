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
  Image
} from 'react-native';
import { Card, ListItem, Button, FormInput, FormLabel } from 'react-native-elements'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      input: "",
    };
  }

  toLocation = () => {
    this.props.navigation.navigate('Location', {
      input: this.state.input,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Card
          containerStyle={styles.card}
          title='Purveyors of aids to magical mischief-makers are proud to present'
          image={require('../../images/marauders.jpg')}>
          <FormLabel>Enter your name to activate the homonculous charm</FormLabel>
          <FormInput
            ref={input => this.input = input}
            onChangeText={input => this.setState({input})}
            autoFocus
          />
          <Button
            backgroundColor='#400D12'
            fontFamily='Arial'      
            color='#E7C89A'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='ENTER'
            onPress={this.toLocation}/>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
