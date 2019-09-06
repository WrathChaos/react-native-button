import { Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

export const container = (width, height, borderRadius) => {
  return {
    width,
    height,
    borderRadius,
    alignItems: "center",
    justifyContent: "center"
  };
};

export const _textStyle = () => {
  return {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  };
};

export const _solidStyle = backgroundColor => {
  return {
    backgroundColor
  };
};

export const _outlineStyle = (borderWidth, borderColor) => {
  return {
    borderWidth,
    borderColor,
    backgroundColor: "transparent"
  };
};

export const _solidTextStyle = textColor => {
  return {
    color: textColor
  };
};

export const _outlineTextStyle = textColor => {
  return {
    color: textColor
  };
};

export default {};
