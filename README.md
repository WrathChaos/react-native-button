<img alt="React Native Button" src="https://github.com/WrathChaos/react-native-button/blob/master/assets/logo.png" width="1050"/>


[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-button)


[![Fully customizable, Gradient, Outline and Solid Button for React Native.](https://img.shields.io/badge/-Fully%20customizable%2C%20Gradient%2C%20Outline%20and%20Solid%20Button%20for%20React%20Native.-gray?style=for-the-badge)](https://github.com/WrathChaos/react-native-button)


[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-button.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-button)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-button.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Button" src="https://github.com/WrathChaos/react-native-button/blob/master/assets/Screenshots/example2.png" width="49%" height="405" />
  <img alt="React Native Button" src="https://github.com/WrathChaos/react-native-button/blob/master/assets/Screenshots/example.png" width="49%"/>
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
"react-native-dynamic-vector-icons": ">= x.x.x",
"react-native-material-ripple": "^0.9.1"
```

# Button Component Options

- Button (ClassicButton)
- GooglePlayButton (Material Design 2)

## Import

```js
import { Button, GooglePlayButton } from "@freakycoder/react-native-button";
```

# GooglePlayButton Usage (Material Design 2)

## Solid: 
```js
<GooglePlayButton
  text="Open"
  textColor="#fff"
  rippleColor="white"
/>
```

## Outline: 

```js
<GooglePlayButton outline text="Uninstall" />
```



# Button Usage (Classic Button)

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
<Button outline color="#ff738b" textColor="#ff738b" borderColor="#ff738b" />
```

### Configuration - Props

| Property        |  Type   | Default | Description                                             |
| --------------- | :-----: | :-----: | ------------------------------------------------------- |
| outline         | boolean |  true   | make the button outline                                 |
| solid           | boolean |  false  | make the button with a solid background and a shadow    |
| gradient        | boolean |  false  | make the button with a gradient background and a shadow |
| width           | number  |   150   | change the button's width                               |
| height          | number  |   50    | change the button's height                              |
| borderRadius    | number  |   32    | change the button's border radius                       |
| text            | string  |  null   | set the button's text                                   |
| textColor       |  color  | #757575 | change the button's text color                          |
| textStyle       |  style  |  style  | set your own style for the button's style               |
| borderWidth     | number  |   0.3   | change the outline's border width                       |
| borderColor     |  color  | #757575 | change the outline's border color                       |
| shadowColor     |  color  | #757575 | change the solid and gradient's shadow color            |
| backgroundColor |  color  | #757575 | change the solid's background color                     |
| iconDisable     | boolean |  false  | disable the left icon if you want                       |

### Icon Props

| Property |  Type  |   Default   | Description                                         |
| -------- | :----: | :---------: | --------------------------------------------------- |
| name     | string |    star     | change the icon name from React Native Vector Icons |
| type     | string | FontAwesome | change the icon type from React Native Vector Icons |
| color    | color  |    white    | change the icon color                               |
| size     | number |     15      | change the icon size                                |

### ToDos

- [x] LICENSE
- [ ] Expo Version
- [ ] Write an article about the lib on Medium

# Change Log

## [0.2.0](https://github.com/WrathChaos/react-native-button/tree/0.2.0) (2019-09-07)
[Full Changelog](https://github.com/WrathChaos/react-native-button/compare/0.0.15...0.2.0)

⚠ BREAKING CHANGE: Way of import is changed! GooglePlayButton with newest Material Design 2 is added 🎉

**Merged pull requests:**

- Bump eslint-utils from 1.4.0 to 1.4.2 in /example [\#1](https://github.com/WrathChaos/react-native-button/pull/1) ([dependabot[bot]](https://github.com/apps/dependabot))

## [0.0.15](https://github.com/WrathChaos/react-native-button/tree/0.0.15) (2019-08-17)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Button Library is available under the MIT license. See the LICENSE file for more info.
