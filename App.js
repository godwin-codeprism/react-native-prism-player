
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import PrismPlayer from 'react-native-prism-player';

export default class App extends Component {
  render() {
    console.log(PrismPlayer);
    return (
      <View style={styles.container}>
        <PrismPlayer source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }} style={{width:'100%', height:'100%'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
