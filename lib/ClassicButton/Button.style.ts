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
    width: 150,
    height: 50,
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
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  outlineStyle: {
    borderWidth: 0.3,
    borderColor: "#757575",
  },
});

export const _solidStyle = (backgroundColor: string): ViewStyle => {
  return {
    backgroundColor,
  };
};
