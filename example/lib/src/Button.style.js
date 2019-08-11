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

export default {
  container: {
    width: 150,
    height: 50,
    borderRadius: 32
  },
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
