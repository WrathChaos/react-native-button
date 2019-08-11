import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-dynamic-vector-icons";
import styles, {
  _textStyle,
  outlineStyle,
  shadowStyle,
  solidStyle
} from "./Button.style";

const Button = props => {
  const {
    text,
    style,
    solid,
    outline,
    gradient,
    textColor,
    textStyle,
    borderWidth,
    borderColor,
    shadowColor,
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
        <Icon
          name="star"
          type="FontAwesome"
          color="white"
          size={15}
          {...props}
        />
        <Text style={textStyle || _textStyle(textColor)}>{text}</Text>
      </View>
    );
  }

  return (
    <Androw style={!outline && shadowStyle(shadowColor)}>
      <TouchableOpacity
        style={[style || styles.container, styles.center, selectStyle()]}
      >
        {gradient && renderGradient()}
        {!gradient && renderContent()}
      </TouchableOpacity>
    </Androw>
  );
};

Button.propTypes = {
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string
};

Button.defaultProps = {
  borderWidth: 0.3,
  textColor: "#757575",
  borderColor: "#757575",
  shadowColor: "#757575",
  backgroundColor: "#757575",
  text: "Button"
};

export default Button;
