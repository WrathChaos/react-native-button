import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { GooglePlayButton, Button } from "@freakycoder/react-native-button";

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <StatusBar barStyle={"light-content"} />
      <GooglePlayButton outline text="Uninstall" />
      <View style={{ marginTop: 16 }}>
        <GooglePlayButton text="Open" textColor="#fff" rippleColor="white" />
      </View>
      <View style={styles.classicButtonContainer}>
        <Button
          gradient
          text="Hello"
          backgroundColor="#FFAFBD"
          textStyle={{ color: "#fff" }}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 125,
    marginTop: 16,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  classicButtonContainer: {
    height: 250,
    marginTop: 16,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default App;
