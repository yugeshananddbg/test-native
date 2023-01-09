import React, { useState, useEffect } from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles.js";

export default function MenuButton(props) {
  const { title, onPress, source, subMenu } = props;

  return (
    <>
      <TouchableHighlight
        onPress={onPress}
        style={styles.btnClickContain}
        underlayColor="rgba(128, 128, 128, 0.1)"
      >
        <View style={styles.btnContainer}>
          <Image source={source} style={styles.btnIcon} />
          <Text style={styles.btnText}>{title}</Text>
        </View>
      </TouchableHighlight>
    </>
  );
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
  subMenu: PropTypes.array,
};
