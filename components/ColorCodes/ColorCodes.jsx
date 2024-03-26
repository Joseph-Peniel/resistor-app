import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ColorCode } from "../ColorCode";
import { Bands, Colors } from "../../Config";

const ColorCodes = ({
  selectedBand,
  setSelectedBand,
  currentTab,
  bandColor1,
  bandColor2,
  bandColor3,
  bandColor4,
  bandColor5,
}) => {
  return (
    <LinearGradient
      colors={["#E6E5BE", "#FFFED7", "#E6E5BE"]}
      locations={[0.1, 0.5, 1]}
      start={{ x: 0.2, y: 0.5 }}
      end={{ x: 0.5, y: 0.2 }}
      style={styles.container}
    >
      <View style={{ ...styles.mainColorSection }}>
        {[Bands.$3Bands, Bands.$4Bands, Bands.$5Bands].includes(currentTab) ? (
          <>
            <ColorCode
              label={`A`}
              band={"band_1"}
              selectedBand={selectedBand}
              setSelectedBand={setSelectedBand}
              bandColor={bandColor1}
            />

            <ColorCode
              label={`B`}
              band={"band_2"}
              selectedBand={selectedBand}
              setSelectedBand={setSelectedBand}
              bandColor={bandColor2}
            />
            <ColorCode
              label={`C`}
              band={"band_3"}
              selectedBand={selectedBand}
              setSelectedBand={setSelectedBand}
              bandColor={bandColor3}
            />
          </>
        ) : null}
      </View>
      <View style={{ ...styles.secondColorSection(currentTab) }}>
        {[Bands.$4Bands, Bands.$5Bands].includes(currentTab) ? (
          <ColorCode
            label={`D`}
            band={"band_4"}
            selectedBand={selectedBand}
            setSelectedBand={setSelectedBand}
            bandColor={bandColor4}
          />
        ) : null}
      </View>
      <View style={{ ...styles.thirdColorSection(currentTab) }}>
        {[Bands.$5Bands].includes(currentTab) ? (
          <ColorCode
            label={`E`}
            band={"band_5"}
            selectedBand={selectedBand}
            setSelectedBand={setSelectedBand}
            bandColor={bandColor5}
          />
        ) : null}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    flexDirection: "row",
    gap: 4,
    height: "10%",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    borderColor: Colors.black,
    position: "relative",
  },
  mainColorSection: {
    width: "50%",
    flexDirection: "row",
    gap: 7,
  },
  secondColorSection: (currentTab) => ({
    width: "12%",
    flexDirection: "row",
    marginLeft: ["4 Bands"].includes(currentTab) ? "auto" : 5,
  }),
  thirdColorSection: (currentTab) => ({
    width: "12%",
    flexDirection: "row",
    marginLeft: ["5 Bands"].includes(currentTab) ? "auto" : 0,
    display: ["5 Bands"].includes(currentTab) ? "flex" : "none",
  }),
  button: {
    width: "100%",
  },
  text: {
    width: "100%",
    textAlign: "center",
  },
});
export default ColorCodes;
