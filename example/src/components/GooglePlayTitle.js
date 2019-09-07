import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import styles from "./GooglePlayTitle.style";

const spotifyLogo = require("../../assets/Spotify_Icon_RGB_Green.png");

const GooglePlayTitle = props => {
  const {} = props;
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.logoStyle} source={spotifyLogo} />
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.bigTitleStyle}>
              Spotify: Listen to your favourite music & podcasts
            </Text>
          </View>
          <View style={styles.subtitleStyle}>
            <Text style={styles.ownerTextStyle}>Spotify Ltd.</Text>
          </View>
          <View style={styles.subtitleStyle}>
            <Text style={styles.adsTitleStyle}>
              Contains ads * In-app purchases
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

GooglePlayTitle.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string
};

GooglePlayTitle.defaultProps = {
  stars: 5,
  ratings: "Hellooo"
};

export default GooglePlayTitle;
