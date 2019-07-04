/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

/** child components */
import Spinner from "./components/Spinner";
import Gallery from "./components/Gallery";

console.disableYellowBox = true;

const API_URL = "https://picsum.photos/v2/list?page=2&limit=30";
const API_CONFIG = {
  host: "https://api.flickr.com/",
  uri: "services/rest/",
  search: "flickr.photos.search",
  api_key: "090141529d263fd954f83caee50c0d4e",
  item: "earth",
  count: 20
};
const Flikr_URL = `${API_CONFIG.host}${API_CONFIG.uri}?method=${
  API_CONFIG.search
}&api_key=${API_CONFIG.api_key}&format=json&text=.${
  API_CONFIG.item
}&nojsoncallback=true&per_page=${API_CONFIG.count}&extras=url_s`;

export default class App extends Component {
  state = {
    imageData: null,
    loading: true,
    gridView: true,
    listView: false,
    btnText: "Show List",
    iconColorActive: "#bed5fb",
    iconColor: "#5b739a"
  };
  componentDidMount() {
    this.componentMounted = true;
    this.getImage(Flikr_URL);
  }

  componentWillUnmount() {
    this.componentMounted = false;
  }

  getImage(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (this.componentMounted) {
          this.setState({
            imageData: responseJson.photos.photo,
            loading: false
          });
        }
      })
      .catch(err => {
        console.log(err);
        throw error;
      });
  }

  changeViewList = () => {
    this.setState({ gridView: false, listView: true });
  };

  changeViewGrid = () => {
    this.setState({ gridView: true, listView: false });
  };

  render() {
    const {
      imageData,
      loading,
      gridView,
      listView,
      iconColor,
      iconColorActive
    } = this.state;
    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: "#4540c1" }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
          <StatusBar barStyle="light-content" />
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              {loading ? (
                <Spinner />
              ) : (
                <Gallery
                  gridView={gridView}
                  listView={listView}
                  changeViewList={this.changeViewList}
                  changeViewGrid={this.changeViewGrid}
                  iconColor={iconColor}
                  iconColorActive={iconColorActive}
                  imageData={imageData}
                />
              )}
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
