import React from "react";
import PropTypes from "prop-types";
import { Text, Dimensions } from "react-native";
import Ripple from "react-native-material-ripple";
import styles, {
  container,
  _textStyle,
  _solidStyle,
  _outlineStyle,
  _solidTextStyle,
  _outlineTextStyle
} from "./GooglePlayButton.style";

const { width: ScreenWidth } = Dimensions.get("window");

const GooglePlayButton = props => {
  const {
    text,
    solid,
    width,
    height,
    outline,
    gradient,
    textStyle,
    textColor,
    rippleColor,
    borderWidth,
    borderColor,
    borderRadius,
    backgroundColor,
    rippleContainerBorderRadius
  } = props;

  renderGradient = () => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#FFAFBD", "#ffc3a0"]}
        style={[container(width, height, borderRadius), styles.center]}
      >
        {renderContent()}
      </LinearGradient>
    );
  };

  setSolidStyle = () => {
    return _solidStyle(backgroundColor);
  };

  setOutlineStyle = () => {
    return _outlineStyle(borderWidth, borderColor);
  };

  selectStyle = () => {
    if (solid) return setSolidStyle();
    else if (outline) return setOutlineStyle();
    else if (gradient) return null;
    else return setSolidStyle();
  };

  selectTextStyle = () => {
    if (solid) return _solidTextStyle(textColor);
    else if (outline) return _outlineTextStyle(textColor);
    else return _solidTextStyle(textColor);
  };

  return (
    <Ripple
      rippleColor={rippleColor}
      rippleContainerBorderRadius={rippleContainerBorderRadius}
      style={[container(width, height, borderRadius), selectStyle()]}
    >
      <Text style={[textStyle || _textStyle(), selectTextStyle()]}>{text}</Text>
    </Ripple>
  );
};

GooglePlayButton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  rippleColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  rippleContainerBorderRadius: PropTypes.number
};

GooglePlayButton.defaultProps = {
  height: 42.5,
  borderWidth: 1,
  borderRadius: 5,
  textColor: "#00865f",
  rippleColor: "black",
  borderColor: "#e1e1e1",
  width: ScreenWidth * 0.9,
  backgroundColor: "#00865f",
  rippleContainerBorderRadius: 5
};

export default GooglePlayButton;
