import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

/** child components */
import Header from "./Header";

const restrictStrLength = (str, n) => str.substr(1,n);

const Gallery = props => (
  <View>
    <Header
      name="Gallery App"
      gridView={props.gridView}
      listView={props.listView}
      changeViewList={props.changeViewList}
      changeViewGrid={props.changeViewGrid}
      iconColor={props.iconColor}
      iconColorActive={props.iconColorActive}
    />
    <FlatList
      keyExtractor={item => item.id}
      key={props.gridView ? 1 : 0}
      numColumns={props.gridView ? 2 : 1}
      data={props.imageData}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <View style={styles.imageHolder}>
            <Image source={{ uri: item.url_s }} style={styles.image} />
          </View>
          <Text style={styles.title}>{restrictStrLength(item.title, 25)}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
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
  title: {
    padding: 10,
  }
});

export default Gallery;
