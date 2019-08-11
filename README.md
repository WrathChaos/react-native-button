<img alt="React Native Button" src="https://github.com/WrathChaos/react-native-button/blob/master/assets/logo.png" width="1050"/>

Fully customizable, Gradient, Outline and Solid Button for React Native.

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-button.svg)](https://www.npmjs.com/package/react-native-button)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-button.svg)](https://www.npmjs.com/package/react-native-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Button" src="https://github.com/WrathChaos/react-native-button/blob/master/assets/Screenshots/example.png"/>
</p>

## Installation

Add the dependency:

### React Native:

```ruby
npm i @freakycoder/react-native-button
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-androw": "0.0.31",
"react-native-vector-icons": ">= 6.x.x",
"react-native-linear-gradient": ">= 2.5.x",
"react-native-dynamic-vector-icons": ">= x.x.x"
```

## Gradient Button Usage

```js
<Button gradient textColor="white" shadowColor="#ff738b" />
```

## Solid Background Usage

```js
<Button
  solid
  textColor="white"
  shadowColor="#ff738b"
  backgroundColor="#FFAFBD"
/>
```

## Outline Button Usage

```js
<Button
  outline
  color="#ff738b"
  textColor="#ff738b"
  borderColor="#ff738b"
/>
```

### Configuration - Props

| Property            |   Type    |      Default      | Description                                                                                           |
| ------------------- | :-------: | :---------------: | ----------------------------------------------------------------------------------------------------- |
| onPress             | function  |     function      | set your own function for the onPress functionality                                                   |
| fontSize            |  number   |        13         | change the font size                                                                                  |
| fontColor           |   color   |      #b3b6c3      | change the font color                                                                                 |
| iconName            |  string   |      search       | change the icon                                                                                       |
| iconType            |  string   |     Octicons      | change the icon style                                                                                 |
| iconSize            |  number   |        20         | change the icon size                                                                                  |
| iconColor           |   color   |      #807DE7      | change the icon color                                                                                 |
| iconComponent       | component |       Icon        | set your own component instead of Icon                                                                |
| shadowColor         |   color   |      #757575      | change the shadow color                                                                               |
| shadowStyle         |   style   |   shadow style    | set your own shadow style                                                                             |
| placeholder         |  string   |       null        | set your own placeholder string                                                                       |
| textInputDisable    |  boolean  |       false       | disable the text input, and Text component will be available instead                                  |
| textInputComponent  | component | Text OR TextInput | set your own component instead of Text OR TextInput for the center component                          |
| textInputValue      |  string   |       value       | set the value of the text input                                                                       |
| onChangeText        | function  |     function      | set your own function for the onChangeText logic                                                      |
| cancelIconName      |  string   |       clear       | change the cancel icon                                                                                |
| cancelIconType      |  string   |   MaterialIcons   | change the cancel icon style                                                                          |
| cancelIconSize      |  number   |        23         | change the cancel icon size                                                                           |
| cancelIconColor     |   color   |      #b3b6c3      | change the cancel icon color                                                                          |
| cancelIconComponent | component |       Icon        | set your own component instead of Icon for the cancel component (right component)                     |
| onPressCancel       | function  |     function      | set your own function for the cancel button's onPress functionality                                   |
| cancelComponent     | component |     component     | set your own component instead of cancel component                                                    |
| cancelButtonDisable |  boolean  |       false       | disable cancel button component                                                                       |
| autoFocus           |  boolean  |       true        | change the autoFocus mode for the TextInput                                                           |
| onPressToFocus      |  boolean  |       false       | when enable it, onPress will automatically focus on the TextInput and opens the soft virtual keyboard |

### ToDos

- [x] LICENSE
- [ ] Expo Version
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dynamic Search Bar Library is available under the MIT license. See the LICENSE file for more info.
