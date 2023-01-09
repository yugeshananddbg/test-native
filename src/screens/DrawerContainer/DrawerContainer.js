import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles.js";
import { Image } from "react-native";
import MenuButton from "../../components/MenuButton/MenuButton.js";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View>
      <View style={styles.userBox}>
        <Image
          style={styles.user}
          source={require("../../../assets/logo.png")}
        />
        <Text>MPM System</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="Home"
            source={require("../../../assets/icons/home.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Schedules"
            source={require("../../../assets/icons/company.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Machine Line"
            source={require("../../../assets/icons/plantline.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Reports"
            source={require("../../../assets/icons/report.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
