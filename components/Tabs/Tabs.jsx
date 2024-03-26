import React from "react";
import { StyleSheet, View } from "react-native";
import Tab from "./Tab/Tab";

const Tabs = ({ tabs = [], handleClick = () => {}, activeTab }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Tab
          activeTab={activeTab}
          handleClick={handleClick}
          tab={tab}
          key={tab}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    width: "100%",
  },
});
export default Tabs;
