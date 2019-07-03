import React, { Component } from "react";
import { Image, View, Text, StyleSheet, FlatList } from "react-native";

/** child components */
import Header from "./Header";
import Spinner from "./Spinner";

const Flikr_URL =
  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=090141529d263fd954f83caee50c0d4e&format=json&text=.cat&nojsoncallback=true&per_page=20&extras=url_s";

export default class Gallery extends Component {
  state = {
    imageData: null,
    loading: true,
    gridView: true,
    listView: false,
    btnText: "Show List",
    iconColorActive: "#a1b5ca",
    iconColor: "#ccc"
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
    this.setState({ gridView: false, listView: true });
  };
  changeViewGrid = () => {
    this.setState({ gridView: true, listView: false });
  };

  render() {
    const { imageData, loading, gridView, listView } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {loading ? (
          <Spinner />
        ) : (
          <View>
            <Header
              name="Gallery App"
              gridView={gridView}
              listView={listView}
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
  welcome: {
    alignItems: "center",
    fontSize: 20
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
  }
});
