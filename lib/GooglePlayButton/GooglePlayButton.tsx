import * as React from "react";
import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import Ripple from "react-native-material-ripple";
/**
 * ? Local Imports
 */
import styles, {
  _solidStyle,
  _outlineTextStyle,
  _solidTextStyle,
} from "./GooglePlayButton.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IGooglePlayButtonProps {
  text: string;
  solid?: boolean;
  outline?: boolean;
  gradient?: boolean;
  textColor?: string;
  backgroundColor?: string;
  style?: CustomStyleProp;
  outlineStyle?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  onPress: () => void;
}

const GooglePlayButton: React.FC<IGooglePlayButtonProps> = ({
  style,
  text,
  solid,
  outline,
  gradient,
  textStyle,
  textColor = "#00865f",
  outlineStyle,
  backgroundColor = "#00865f",
  onPress,
  ...rest
}) => {
  const setSolidStyle = () => {
    return _solidStyle(backgroundColor);
  };

  const setOutlineStyle = () => {
    return [styles.outlineStyle, outlineStyle];
  };

  const selectStyle = () => {
    if (solid) return setSolidStyle();
    else if (outline) return setOutlineStyle();
    else if (gradient) return null;
    else return setSolidStyle();
  };

  const selectTextStyle = () => {
    if (solid) return _solidTextStyle(textColor);
    else if (outline) return _outlineTextStyle(textColor);
    else return _solidTextStyle(textColor);
  };

  return (
    <Ripple
      onPress={onPress}
      rippleColor="#000"
      rippleContainerBorderRadius={5}
      style={[styles.container, selectStyle(), style]}
      {...rest}
    >
      <Text style={[(styles.textStyle, textStyle), selectTextStyle()]}>
        {text}
      </Text>
    </Ripple>
  );
};

export default GooglePlayButton;
