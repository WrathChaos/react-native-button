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

| Property        |  Type   | Default | Description                                             |
| --------------- | :-----: | :-----: | ------------------------------------------------------- |
| outline         | boolean |  true   | make the button outline                                 |
| solid           | boolean |  false  | make the button with a solid background and a shadow    |
| gradient        | boolean |  false  | make the button with a gradient background and a shadow |
| style           |  style  |  style  | set your own style                                      |
| text            | string  |  null   | set the button's text                                   |
| textColor       |  color  | #757575 | change the button's text color                          |
| textStyle       |  style  |  style  | set your own style for the button's style               |
| borderWidth     | number  |   0.3   | change the outline's border width                       |
| borderColor     |  color  | #757575 | change the outline's border color                       |
| shadowColor     |  color  | #757575 | change the solid and gradient's shadow color            |
| backgroundColor |  color  | #757575 | change the solid's background color                     |

### ToDos

- [x] LICENSE
- [ ] Expo Version
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dynamic Search Bar Library is available under the MIT license. See the LICENSE file for more info.
