import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";


const API_KEY = "1576b8b44d60301751e082a6970c6e6a";

export default class App extends Component {

  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,

  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    }),
    error => {
      this.setState({
        error: error
      })
    }
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true,
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather temp={Math.floor(temperature - 273.15)} weatherName={name} /> : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the Weather</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
        )}
      </View> 
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#fdf6aa",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
  }
});
