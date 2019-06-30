/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from "react-native";

import Header from "./components/Header";
import Spinner from "./components/Spinner";

console.disableYellowBox = true;

const API_URL = "https://picsum.photos/v2/list?page=2&limit=30";
const Flikr_URL =
  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=090141529d263fd954f83caee50c0d4e&format=json&text=.cat&nojsoncallback=true&per_page=20&extras=url_s";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
        <View style={styles.container}>
          <ImageComponent />
        </View>
      </SafeAreaView>
    );
  }
}

class ImageComponent extends Component {
  state = {
    imageData: null,
    loading: true,
    gridView: true,
    btnText: "Show List",
    iconColor: "#d4e"
  };

  componentDidMount() {
    this.componentMounted = true;
    this.getImage(Flikr_URL);
  }

  getImage(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
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

  componentWillUnmount() {
    this.componentMounted = false;
  }

  changeViewList = () => {
    this.setState({ gridView: false }, () => {
      this.setState({ iconColor: "#a1b5ca" });
    });
  };
  changeViewGrid = () => {
    this.setState({ gridView: true }, () => {
      this.setState({ iconColor: "#e34" });
    });
  };

  render() {
    const { imageData, loading } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {loading ? (
          <Spinner />
        ) : (
          <View>
            {/* <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.btnDesign,
                { backgroundColor: this.state.btnBgColor }
              ]}
              onPress={this.changeView}
            >
              <Text style={styles.btnText}>{this.state.btnText}</Text>
            </TouchableOpacity> */}
            <Header
              name="Gallery App"
              changeViewList={this.changeViewList}
              changeViewGrid={this.changeViewGrid}
              iconColor={this.state.iconColor}
            />
            <FlatList
              keyExtractor={item => item.id}
              key={this.state.gridView ? 1 : 0}
              numColumns={this.state.gridView ? 2 : 1}
              data={this.state.imageData}
              renderItem={({ item }) => (
                <View style={styles.imageHolder}>
                  <Image source={{ uri: item.url_s }} style={styles.image} />
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    alignItems: "center",
    fontSize: 20
  },
  imageHolder: {
    margin: 5,
    height: 160,
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  btnDesign: {
    padding: 10,
    backgroundColor: "#e45",
    width: "30%",
    alignSelf: "center",
    marginBottom: 10
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    alignSelf: "center"
  }
});
