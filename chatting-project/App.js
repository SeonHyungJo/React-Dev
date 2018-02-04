import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Home'
import Chat from './components/Chat'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
            <Scene key='home' component={Home} title='Home'/>
            <Scene key='chat' component={Chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
