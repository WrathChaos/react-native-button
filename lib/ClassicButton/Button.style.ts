import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  contentStyle: ViewStyle;
  textStyle: TextStyle;
  shadowStyle: ViewStyle;
  outlineStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    width: 50,
    height: 150,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  contentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginLeft: 8,
    marginRight: 8,
    color: "#757575",
  },
  shadowStyle: {
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  outlineStyle: {
    border: 1,
    borderWidth: 0.3,
    borderColor: "#757575",
  },
});

export function _solidStyle(backgroundColor) {
  return {
    backgroundColor,
  };
}
