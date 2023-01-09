import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";

// import Clock from "react-live-clock";
// import { useLayoutEffect } from "react";

const HeaderRight = () => {

  return (
    <View style={styles.container}>
      <Text>
        Hello3
        {/* <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Kolkata"} /> */}
      </Text>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
});
