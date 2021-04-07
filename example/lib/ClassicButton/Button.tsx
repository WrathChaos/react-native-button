import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import LinearGradient from "react-native-linear-gradient";
/**
 * ? Local Imports
 */
import styles, { _solidStyle } from "./Button.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IButtonProps {
  text: string;
  solid?: boolean;
  outline?: boolean;
  gradient?: boolean;
  iconDisable?: boolean;
  backgroundColor?: string;
  style?: CustomStyleProp;
  textStyle: CustomTextStyleProp;
  shadowStyle?: CustomStyleProp;
  outlineStyle?: CustomStyleProp;
}

const Button: React.FC<IButtonProps> = ({
  style,
  text,
  solid,
  outline,
  gradient,
  textStyle,
  iconDisable,
  shadowStyle,
  outlineStyle,
  backgroundColor,
  ...rest
}) => {
  const renderGradient = () => {
    return (
      <LinearGradient
        style={[styles.container, style]}
        {...rest}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#FFAFBD", "#ffc3a0"]}
      >
        {renderContent()}
      </LinearGradient>
    );
  };

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
    else return setOutlineStyle();
  };

  const renderContent = () => {
    return (
      <View style={styles.contentStyle}>
        {!iconDisable && (
          <Icon
            name="star"
            type="FontAwesome"
            color="white"
            size={15}
            {...rest}
          />
        )}
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={!outline && [styles.shadowStyle, shadowStyle]}>
      <TouchableOpacity
        style={[styles.container, selectStyle(), style]}
        {...rest}
      >
        {gradient && renderGradient()}
        {!gradient && renderContent()}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
