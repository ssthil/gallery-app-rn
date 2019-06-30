import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

// const Header = props => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.welcome}>{props.name}</Text>
//       <View style={styles.iconView}>
//         <TouchableOpacity activeOpacity={0.8}>
//           <Icon name="th-large" size={25} color="#a1b5ca" />
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.8}>
//           <Icon name="list" size={25} color="#e34" style={styles.iconAlign} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
        <View style={styles.header}>
        <Text style={styles.welcome}>{this.props.name}</Text>
        <View style={styles.iconView}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.changeViewGrid}>
            <Icon name="th-large" size={25} color={this.props.iconColor} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.changeViewList}>
            <Icon name="list" size={25} color={this.props.iconColor} style={styles.iconAlign} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    marginBottom: 15
  },
  welcome: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#345",
    marginTop: 30,
    marginBottom: 30,
    alignSelf: "flex-start",
    flexGrow: 1,
    paddingLeft: 20
  },
  iconView: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center"
  },
  iconAlign: { marginLeft: 15, marginRight: 15 }
});
