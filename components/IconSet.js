import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

const IconSet = ({ changeViewGrid, changeViewList, iconColor }) => (
  <View style={styles.iconView}>
    <TouchableOpacity activeOpacity={0.8} onPress={changeViewGrid}>
      <Icon name="th-large" size={25} color={iconColor} />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.8} onPress={changeViewList}>
      <Icon name="list" size={25} style={styles.iconAlign} color={iconColor} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  iconView: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center"
  },
  iconAlign: { marginLeft: 15, marginRight: 15 }
});

export default IconSet;
