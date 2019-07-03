/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Gallery from "./components/Gallery";

console.disableYellowBox = true;

const API_URL = "https://picsum.photos/v2/list?page=2&limit=30";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
        <View style={styles.container}>
          <Gallery />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
