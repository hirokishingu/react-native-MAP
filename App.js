/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

export default class App extends Component<Props> {

  async componentWillMount () {
    MapboxGL.setAccessToken("pk.eyJ1IjoiaGlyb2tpc2hpbmd1IiwiYSI6ImNqbGs3eW81djBqeXozcW81cjNxOTdxeHIifQ.aMJ62H4EMhEMh3xSFO3_4w");
  }

  render() {
    return (
      <MapboxGL.MapView
        zoomLevel={14}
        centerCoordinate={[139.766403, 35.681262]}
        styleURL="mapbox://styles/mapbox/streets-v10"
        style={{flex: 1}}
      />
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
