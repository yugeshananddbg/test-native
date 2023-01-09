import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  accordinBtn: {
    flexDirection: "column",
  },
  btnClickContain: {
    flexDirection: "column",
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 2,
  },
  subMenuBtn: {
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;