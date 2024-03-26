import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../Config";

const Tab = ({ handleClick, activeTab, tab }) => {
  return (
    <View style={{ ...styles.container(activeTab, tab) }}>
      <TouchableOpacity
        style={{ ...styles.button }}
        onPress={() => handleClick(tab)}
      >
        <Text style={{ ...styles.text(activeTab, tab) }}>{tab}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (currentTab, thisTab) => ({
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    backgroundColor: currentTab === thisTab ? Colors.black : "transparent",
  }),
  button: {
    width: "100%",
  },
  text: (currentTab, thisTab) => ({
    width: "100%",
    textAlign: "center",
    color: currentTab === thisTab ? Colors.white : "#525252",
  }),
});
export default Tab;
