import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-dynamic-vector-icons";
import styles, {
  _container,
  _textStyle,
  outlineStyle,
  shadowStyle,
  solidStyle
} from "./Button.style";

const Button = props => {
  const {
    text,
    solid,
    width,
    height,
    outline,
    gradient,
    textColor,
    textStyle,
    iconDisable,
    borderWidth,
    borderColor,
    shadowColor,
    borderRadius,
    backgroundColor
  } = props;

  function renderGradient() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#FFAFBD", "#ffc3a0"]}
        style={[styles.container, styles.center]}
      >
        {renderContent()}
      </LinearGradient>
    );
  }

  function setSolidStyle() {
    return solidStyle(backgroundColor);
  }

  function setOutlineStyle() {
    return outlineStyle(borderWidth, borderColor);
  }

  function selectStyle() {
    if (solid) return setSolidStyle();
    else if (outline) return setOutlineStyle();
    else if (gradient) return null;
    else return setOutlineStyle();
  }

  function renderContent() {
    return (
      <View style={styles.contentStyle}>
        {!iconDisable && (
          <Icon
            name="star"
            type="FontAwesome"
            color="white"
            size={15}
            {...props}
          />
        )}
        <Text style={textStyle || _textStyle(textColor)}>{text}</Text>
      </View>
    );
  }

  return (
    <Androw style={!outline && shadowStyle(shadowColor)}>
      <TouchableOpacity
        style={[
          _container(width, height, borderRadius),
          styles.center,
          selectStyle()
        ]}
        {...props}
      >
        {gradient && renderGradient()}
        {!gradient && renderContent()}
      </TouchableOpacity>
    </Androw>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  textColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  shadowColor: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string
};

Button.defaultProps = {
  height: 50,
  width: 150,
  text: "Button",
  borderRadius: 32,
  borderWidth: 0.3,
  textColor: "#757575",
  borderColor: "#757575",
  shadowColor: "#757575",
  backgroundColor: "#757575"
};

export default Button;
