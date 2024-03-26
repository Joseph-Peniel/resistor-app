import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../Config";

const Modal = ({ open, onClose, title, children }) => {
  return (
    <View style={{ ...styles.modal(open) }}>
      <View style={{ ...styles.modalContent }}>
        <View style={{ ...styles.container }}>
          <View style={styles.modalHeader}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>{children}</View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    position: "relative",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  modal: (open = false) => ({
    top: 0,
    margin: "auto",
    width: "100%",
    alignSelf: "center",
    height: "105%",
    zIndex: 99990000,
    position: "absolute",
    alignItems: "center",
    transform: [{ scale: open ? 1 : 0 }], // Correct syntax for transform scale
  }),
  modalContent: {
    width: "100%",
    alignSelf: "center",
    height: "100%",
    zIndex: 99990000,
    position: "relative",
    alignItems: "center",
    backgroundColor: Colors.transparent,
    justifyContent: "center",
  },
  container: {
    width: "100%",
    alignSelf: "center",
    height: "50%",
    zIndex: 99990000,
    position: "relative",
    backgroundColor: Colors.white,
    marginHorizontal: 4, // Use marginHorizontal for gap effect
    borderRadius: 10,
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
  modalHeader: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    flexDirection: "row",
  },
  modalBody: {
    flex: 1,
    gap: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  button: {
    alignSelf: "flex-end",
  },
  text: {
    width: "100%",
    textAlign: "center",
  },
  title: {
    flex: 1,
    textTransform: "uppercase",
    color: Colors.black,
  },
  closeText: {
    width: "100%",
    color: Colors.black,
    textAlign: "center",
  },
});
export default Modal;
