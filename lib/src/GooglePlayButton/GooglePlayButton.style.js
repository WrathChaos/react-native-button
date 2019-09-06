import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const container = () => {
  return {
    width: width * 0.9,
    height: 42.5
  };
};

export default {};
