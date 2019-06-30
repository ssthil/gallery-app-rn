import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Spinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinnerOne: {
        backgroundColor: "powderblue"
      },
      spinnerTwo: {
        backgroundColor: "skyblue"
      },
      spinnerThree: {
        backgroundColor: "steelblue"
      }
    };

    setInterval(() => {
      if (
        this.state.spinnerOne.backgroundColor === "powderblue" &&
        this.state.spinnerTwo.backgroundColor === "skyblue" &&
        this.state.spinnerThree.backgroundColor === "steelblue"
      ) {
        this.setState({
          spinnerOne: {
            backgroundColor: "skyblue"
          },
          spinnerTwo: {
            backgroundColor: "steelblue"
          },
          spinnerThree: {
            backgroundColor: "powderblue"
          }
        });
      } else if (
        this.state.spinnerOne.backgroundColor === "skyblue" &&
        this.state.spinnerTwo.backgroundColor === "steelblue" &&
        this.state.spinnerThree.backgroundColor === "powderblue"
      ) {
        this.setState({
          spinnerOne: {
            backgroundColor: "steelblue"
          },
          spinnerTwo: {
            backgroundColor: "powderblue"
          },
          spinnerThree: {
            backgroundColor: "skyblue"
          }
        });
      } else {
        this.setState({
          spinnerOne: {
            backgroundColor: "powderblue"
          },
          spinnerTwo: {
            backgroundColor: "skyblue"
          },
          spinnerThree: {
            backgroundColor: "steelblue"
          }
        });
      }
    }, 200);
  }

  render() {
    return (
      <View style={styles.spinnerBg}>
        <View style={styles.spinnerContainer}>
          <View style={[styles.spinner, this.state.spinnerOne]} />
          <View style={[styles.spinner, this.state.spinnerTwo]} />
          <View style={[styles.spinner, this.state.spinnerThree]} />
        </View>
        <Text>Please wait...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  spinnerContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  spinner: {
    width: 15,
    height: 15,
    marginRight: 10,
    justifyContent: "center",
    borderRadius: 50
  }
});
