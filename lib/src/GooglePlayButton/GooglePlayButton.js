import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import Ripple from "react-native-material-ripple";
import styles, { container } from "./GooglePlayButton.style";

const { width, height } = Dimensions.get("window");

const GooglePlayButton = props => {
  const {} = props;
  return (
    <Ripple style={container()}>
      <Text>New Component</Text>
    </Ripple>
  );
};

GooglePlayButton.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string
};

GooglePlayButton.defaultProps = {
  stars: 5,
  ratings: "Hellooo"
};

export default GooglePlayButton;
