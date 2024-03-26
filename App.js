import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Tabs from "./components/Tabs/Tabs";
import { ColorCodes } from "./components/ColorCodes";
import { Modal } from "./components/Modal";
import {
  BandColor,
  Bands,
  ColorNameMap,
  Colors,
  Digit,
  Multiplier,
  Tolerance,
} from "./Config";
import { ColorPalatte } from "./components/ColorPalatte";
// import { ColorPicker } from "react-native-color-picker";

const App = () => {
  const [bandColor1, setBandColor1] = useState(ColorNameMap.BROWN); // Initialize Bandcolor 1 (first band) to red
  const [bandColor2, setBandColor2] = useState(ColorNameMap.BLACK); // Initialize Bandcolor 2 (second band) to red
  const [bandColor3, setBandColor3] = useState(ColorNameMap.BROWN); // Initialize Bandcolor 3 (third band) to black
  const [bandColor4, setBandColor4] = useState(ColorNameMap.BLACK); // Initialize Bandcolor 4 (fourth band) to black
  const [bandColor5, setBandColor5] = useState(ColorNameMap.NONE); // Initialize Bandcolor 5 (fifth band) to black (optional)
  const [resistance, setResistance] = useState(0);
  const [open, setModalOpen] = useState(false);
  const [selectedBand, setSelectedBand] = useState(null);
  const [currentTab, setCurrentTab] = useState(Bands.$3Bands);

  // Function to calculate resistance based on color codes
  const calculateResistance = () => {
    console.log("open >>", open);
    switch (currentTab) {
      case Bands.$3Bands:
        setResistance(calculateThreeBandResistance());
        break;
      case Bands.$4Bands:
        setResistance(calculateFourBandResistance());
        break;
      case Bands.$5Bands:
        setResistance(calculateFiveBandResistance());
        break;
    }
  };
  const onSetBandColor = (color) => {
    setSelectedBand(null);
    switch (selectedBand) {
      case BandColor.$Band1:
        return setBandColor1(color);
      case BandColor.$Band2:
        return setBandColor2(color);
      case BandColor.$Band3:
        return setBandColor3(color);
      case BandColor.$Band4:
        return setBandColor4(color);
      case BandColor.$Band5:
        return setBandColor5(color);
    }
  };
  // Function to calculate 3-band resistor resistance
  const calculateThreeBandResistance = () => {
    // Implement the 3-band resistor resistance calculation logic
    // Example: convert colors to numeric values and perform calculations
    const value1 = Digit[bandColor1] ? Number(Digit[bandColor1]) : null;
    const value2 = Digit[bandColor2] ? Number(Digit[bandColor2]) : null;

    const [ten, power] = Multiplier[bandColor3].split("^");
    const multiplier = power ? Number(power) : null;

    // Calculate resistance using the color code values (example logic)
    const resistance = Number(`${value1}${value2}`) * Math.pow(10, multiplier); // Example calculation
    const result = `A = ${value1}, B = ${value2}, C = ${ten}^${power} \n\n\n AB x C ± 20% \n\n\n ${value1}${value2} x 10^${power} ± 20% = ${resistance} Ω ± 20%`;
    setModalOpen(true);
    return result;
  };

  // Function to calculate 4-band resistor resistance
  const calculateFourBandResistance = () => {
    // Implement the 4-band resistor resistance calculation logic
    // Example: convert colors to numeric values and perform calculations

    const value1 = Digit[bandColor1] ? Number(Digit[bandColor1]) : null;
    const value2 = Digit[bandColor2] ? Number(Digit[bandColor2]) : null;
    const [ten, power] = Multiplier[bandColor3].split("^");
    const multiplier = power ? Number(power) : null;

    const value4 = Tolerance[bandColor4] ? Number(Tolerance[bandColor4]) : 1;

    // Calculate resistance using the color code values (example logic)
    const resistance = Number(`${value1}${value2}`) * Math.pow(10, multiplier); // Example calculation
    const result = `A = ${value1}, B = ${value2}, C = ${ten}^${power}, D = ${value4}% \n\n\n AB x C ± D% \n\n\n ${value1}${value2} x 10^${power} ± ${value4}% = ${resistance} Ω ± ${value4}%`;
    setModalOpen(true);
    return result;
  };

  // Function to calculate 5-band resistor resistance
  const calculateFiveBandResistance = () => {
    // Implement the 5-band resistor resistance calculation logic
    // Example: convert colors to numeric values and perform calculations

    const value1 = Digit[bandColor1] ? Number(Digit[bandColor1]) : null;
    const value2 = Digit[bandColor2] ? Number(Digit[bandColor2]) : null;
    const value3 = Digit[bandColor3] ? Number(Digit[bandColor3]) : null;
    const [ten, power] = Multiplier[bandColor4].split("^");
    const multiplier = power ? Number(power) : null;
    const value5 = Tolerance[bandColor5];

    // Calculate resistance using the color code values (example logic)
    const resistance =
      Number(`${value1}${value2}${value3}`) * Math.pow(10, multiplier); // Example calculation
    const result = `A = ${value1}, B = ${value2}, C = ${value3}, D = ${ten}^${power}, E = ${value5}% \n\n\n ABC x D ± E% \n\n\n ${value1}${value2}${value3} x 10^${power} ± ${value5}% = ${resistance} Ω ± ${value5}%`;
    setModalOpen(true);
    return result;
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <StatusBar barStyle={"default"} showHideTransition={"fade"} /> */}
      <View style={{ ...styles.container(!!selectedBand) }}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Calculate the Resistance</Text>
        </View>

        <View style={styles.tabs}>
          <Tabs
            tabs={["3 Bands", "4 Bands", "5 Bands"]}
            activeTab={currentTab}
            handleClick={setCurrentTab}
          />

          <View style={styles.colorCodes}>
            <View style={styles.resistorConnector}></View>
            <ColorCodes
              currentTab={currentTab}
              selectedBand={selectedBand}
              setSelectedBand={setSelectedBand}
              bandColor1={bandColor1}
              bandColor2={bandColor2}
              bandColor3={bandColor3}
              bandColor4={bandColor4}
              bandColor5={bandColor5}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={calculateResistance}>
          <Text style={{ color: "#000" }}>Calculate Resistance</Text>
        </TouchableOpacity>

        <View style={{ ...styles.modal(open) }}>
          <Text style={{ ...styles.resultText, color: Colors.black }}>
            {resistance}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalOpen(false)}
          >
            <Text style={{ color: "#000" }}>OK</Text>
          </TouchableOpacity>
        </View>

        <Modal
          open={!!selectedBand}
          title={selectedBand}
          onClose={() => {
            setSelectedBand(null);
          }}
        >
          <ColorPalatte
            onSetBandColor={onSetBandColor}
            selectedBand={selectedBand}
            currentTab={currentTab}
          />
        </Modal>
      </View>

      {/* <Button title="Calculate Resistance" onPress={calculateResistance} /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    position: "relative",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  toleranceInput: {
    color: "#000",
    borderWidth: 2,
    borderLeftColor: "#000",
    borderRightColor: "#000",
    // borderCurve: 10,
    borderRadius: 10,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  modal: (open = false) => ({
    flex: 1,
    width: "100%",
    height: "105%",
    zIndex: 99990000,
    position: "absolute",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    display: open ? "flex" : "none",
    gap: 20,
  }),
  container: (modalOpen) => ({
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 10,
    gap: 20,
  }),
  textWhite: {
    color: "#fff",
  },
  textBlack: {
    color: "#000",
  },
  button: {
    borderWidth: 2,
    borderLeftColor: "#000",
    borderRightColor: "#000",
    borderBlockColor: "#000",
    borderRadius: 10,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  Header: {
    width: "100%",
  },
  HeaderText: {
    fontSize: 34,
  },
  tabs: {
    width: "100%",
    flex: 1,
    gap: 10,
    position: "relative",
  },
  colorCodes: {
    width: "100%",
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  resistorConnector: {
    width: "100%",
    height: 10,
    position: "absolute",
    borderWidth: 0.25,
    borderColor: Colors.black,
    backgroundColor: Colors.silver,
  },
  resultText: {
    width: "100%",
    textAlign: "center",
    marginHorizontal: 10,
  },
});
