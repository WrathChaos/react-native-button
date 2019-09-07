import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";

const spotifyLogo = require("../../assets/Spotify_Icon_RGB_Green.png");

const GooglePlayTitle = props => {
  const {} = props;
  return (
    <View>
      <View style={{ flexDirection: "row", marginLeft: 8 }}>
        <Image style={{ height: 75, width: 75 }} source={spotifyLogo} />
        <View
          style={{
            flexDirection: "column",
            marginLeft: 32,
            marginRight: 32,
            width: "65%"
          }}
        >
          <View>
            <Text style={{ color: "black", fontSize: 26, fontWeight: "600" }}>
              Spotify: Listen to your favourite music & podcasts
            </Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text
              style={{
                color: "#34816b",
                fontWeight: "600",
                fontSize: 16
              }}
            >
              Spotify Ltd.
            </Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ color: "#707072" }}>
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
