import React, { Fragment } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import Button from "./lib/src/Button";
import styles from "./styles/App.style";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button gradient textColor="white" shadowColor="#ff738b" />
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
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
