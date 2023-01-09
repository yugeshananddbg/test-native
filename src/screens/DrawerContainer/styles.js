import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    display: "flex",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  userBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  user: {
    marginTop: 50,
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
});

export default styles;
