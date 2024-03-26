import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ColorCodeMaps, ColorNameMap, Colors } from "../../Config";
// import { Icon } from 'react-native-elements';

const ColorCode = ({ label, band, setSelectedBand, bandColor }) => {
  return (
    <>
      <View style={{ ...styles.container(bandColor) }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedBand(band)}
        >
          <Text style={{ ...styles.buttonText(bandColor) }}>{label}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: (bandColor) => ({
    // position: "relative",
    flex: 1,
    height: "100%",
    // Shadow properties for iOS
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 15, // Elevation property for Android
      },
    }),
    backgroundColor:
      bandColor === "none" ? "transparent" : ColorCodeMaps[bandColor], //"#efefef",
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  }),
  button: {
    zIndex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  buttonText: (bandColor) => ({
    flex: 1,
    fontSize: 22,
    textAlign: "center",
    color: bandColor === ColorNameMap.BLACK ? Colors.white : Colors.black,
  }),
  label: {},
  dropdownItem: {},
});

export default ColorCode;
