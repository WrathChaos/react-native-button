import { Dimensions, ViewStyle, TextStyle, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
  textStyle: TextStyle;
  outlineStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 45,
    borderRadius: 5,
    width: ScreenWidth * 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  outlineStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e1e1e1",
    backgroundColor: "transparent",
  },
});

export const _solidStyle = (backgroundColor: string): ViewStyle => {
  return {
    backgroundColor,
  };
};

export const _solidTextStyle = (textColor: string): TextStyle => {
  return {
    color: textColor,
  };
};

export const _outlineTextStyle = (textColor: string): TextStyle => {
  return {
    color: textColor,
  };
};
