import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ColorCodeMaps,
  Colors,
  BandColorCodes,
  ColorNameMap,
  BandColor,
  Bands,
} from "../../Config";
// import { Icon } from 'react-native-elements';

const ColorPalatte = ({ onSetBandColor, selectedBand, currentTab }) => {
  return (
    <>
      <Text>Set The Color</Text>

      <View style={styles.container}>
        {BandColorCodes.map((bandColorCode, index) => {
          if (
            [BandColor.$Band1, BandColor.$Band2].includes(selectedBand) &&
            ![
              ColorNameMap.GOLD,
              ColorNameMap.SILVER,
              ColorNameMap.NONE,
            ].includes(bandColorCode)
          ) {
            return (
              <TouchableOpacity
                key={bandColorCode}
                style={{
                  ...styles.button,
                  backgroundColor: ColorCodeMaps[bandColorCode],
                }}
                onPress={() => onSetBandColor(bandColorCode)}
              >
                <Text
                  style={{
                    color:
                      bandColorCode === ColorNameMap.BLACK
                        ? Colors.white
                        : Colors.black,
                  }}
                >
                  {bandColorCode}
                </Text>
              </TouchableOpacity>
            );
          }
          if (
            [BandColor.$Band1, BandColor.$Band2, BandColor.$Band3].includes(
              selectedBand
            ) &&
            [Bands.$5Bands].includes(currentTab) &&
            ![
              ColorNameMap.GOLD,
              ColorNameMap.SILVER,
              ColorNameMap.NONE,
            ].includes(bandColorCode)
          ) {
            return (
              <TouchableOpacity
                key={bandColorCode}
                style={{
                  ...styles.button,
                  backgroundColor: ColorCodeMaps[bandColorCode],
                }}
                onPress={() => onSetBandColor(bandColorCode)}
              >
                <Text
                  style={{
                    color:
                      bandColorCode === ColorNameMap.BLACK
                        ? Colors.white
                        : Colors.black,
                  }}
                >
                  {bandColorCode}
                </Text>
              </TouchableOpacity>
            );
          }
          if (
            [BandColor.$Band3].includes(selectedBand) &&
            [Bands.$3Bands, Bands.$4Bands].includes(currentTab) &&
            ![ColorNameMap.NONE].includes(bandColorCode)
          ) {
            return (
              <TouchableOpacity
                key={bandColorCode}
                style={{
                  ...styles.button,
                  backgroundColor: ColorCodeMaps[bandColorCode],
                }}
                onPress={() => onSetBandColor(bandColorCode)}
              >
                <Text
                  style={{
                    color:
                      bandColorCode === ColorNameMap.BLACK
                        ? Colors.white
                        : Colors.black,
                  }}
                >
                  {bandColorCode}
                </Text>
              </TouchableOpacity>
            );
          }
          if (
            [BandColor.$Band4].includes(selectedBand) &&
            [Bands.$4Bands].includes(currentTab) &&
            ![
              ColorNameMap.BLACK,
              ColorNameMap.ORANGE,
              ColorNameMap.YELLOW,
              ColorNameMap.GREY,
              ColorNameMap.WHITE,
            ].includes(bandColorCode)
          ) {
            return (
              <TouchableOpacity
                key={bandColorCode}
                style={{
                  ...styles.button,
                  backgroundColor: ColorCodeMaps[bandColorCode],
                }}
                onPress={() => onSetBandColor(bandColorCode)}
              >
                <Text
                  style={{
                    color:
                      bandColorCode === ColorNameMap.BLACK
                        ? Colors.white
                        : Colors.black,
                  }}
                >
                  {bandColorCode}
                </Text>
              </TouchableOpacity>
            );
          }
          if (
            [BandColor.$Band4].includes(selectedBand) &&
            [Bands.$5Bands].includes(currentTab) &&
            ![ColorNameMap.NONE].includes(bandColorCode)
          ) {
            return (
              <TouchableOpacity
                key={bandColorCode}
                style={{
                  ...styles.button,
                  backgroundColor: ColorCodeMaps[bandColorCode],
                }}
                onPress={() => onSetBandColor(bandColorCode)}
              >
                <Text
                  style={{
                    color:
                      bandColorCode === ColorNameMap.BLACK
                        ? Colors.white
                        : Colors.black,
                  }}
                >
                  {bandColorCode}
                </Text>
              </TouchableOpacity>
            );
          }
          if (
            [BandColor.$Band5].includes(selectedBand) &&
            [Bands.$5Bands].includes(currentTab) &&
            ![
              ColorNameMap.BLACK,
              ColorNameMap.ORANGE,
              ColorNameMap.YELLOW,
              ColorNameMap.GREY,
              ColorNameMap.WHITE,
            ].includes(bandColorCode)
          ) {
            return (
              <TouchableOpacity
                key={bandColorCode}
                style={{
                  ...styles.button,
                  backgroundColor: ColorCodeMaps[bandColorCode],
                }}
                onPress={() => onSetBandColor(bandColorCode)}
              >
                <Text
                  style={{
                    color:
                      bandColorCode === ColorNameMap.BLACK
                        ? Colors.white
                        : Colors.black,
                  }}
                >
                  {bandColorCode}
                </Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  button: {
    width: "33%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    // Shadow properties for iOS
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 2, // Elevation property for Android
      },
    }),
  },
});

export default ColorPalatte;
