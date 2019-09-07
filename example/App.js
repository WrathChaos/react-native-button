import React, { Fragment } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles/App.style";
// import Button from "@freakycoder/react-native-button";
import { Button, GooglePlayButton } from "./lib/src/index";
import GooglePlayTitle from "./src/components/GooglePlayTitle";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <GooglePlayTitle />
          <View style={styles.buttonContainer}>
            <GooglePlayButton outline text="Uninstall" />
            <GooglePlayButton
              text="Open"
              textColor="#fff"
              rippleColor="white"
            />
            {/* <Button gradient textColor="white" shadowColor="#ff738b" />
            <Button
              solid
              textColor="white"
              shadowColor="#ff738b"
              backgroundColor="#FFAFBD"
            />
            <Button
              outline
              color="#ff738b"
              textColor="#ff738b"
              borderColor="#ff738b"
            /> */}
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
