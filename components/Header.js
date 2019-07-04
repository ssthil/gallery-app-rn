import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import IconSet from "./IconSet";

const Header = ({
  name,
  gridView,
  listView,
  changeViewGrid,
  changeViewList,
  iconColor,
  iconColorActive
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>{name}</Text>
      <IconSet
        gridView={gridView}
        listView={listView}
        changeViewGrid={changeViewGrid}
        changeViewList={changeViewList}
        iconColor={iconColor}
        iconColorActive={iconColorActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#4540c1",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    marginBottom: 15
  },
  welcome: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#bed5fb",
    marginTop: 30,
    marginBottom: 30,
    alignSelf: "flex-start",
    flexGrow: 1,
    paddingLeft: 20
  }
});

export default Header;
