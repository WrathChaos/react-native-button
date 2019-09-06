export function _textStyle(textColor) {
  return {
    color: textColor,
    marginLeft: 8,
    marginRight: 8
  };
}

export function solidStyle(backgroundColor) {
  return {
    backgroundColor
  };
}

export function outlineStyle(borderWidth, borderColor) {
  return {
    border: 1,
    borderWidth,
    borderColor
  };
}

export function shadowStyle(shadowColor) {
  return {
    shadowColor,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0
    }
  };
}

export function container(width, height, borderRadius) {
  return {
    width,
    height,
    borderRadius
  };
}

export default {
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  contentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
};
