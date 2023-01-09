import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import MenuImage from "../../components/MenuImage/MenuImage.js";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import HeaderRight from "../../components/HeaderRight/HeaderRight.js";
import DropDownPicker from "react-native-dropdown-picker";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <HeaderRight />,
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Machine 1", value: "M1" },
    { label: "Machine 2", value: "M2" },
  ]);

  const LiveProductivity = () => {
    const tableHead = ["Running Productivity", "Details", "Time", "Production"];

    const tableData = [
      ["Expected", "00:52", "1040"],
      ["Actual", "0:0", "0"],
    ];
    const footerData = ["Session's Best 90.48%", "Short", "", 1040];

    return (
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          placeholder={"Select machine name"}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdown}
          containerStyle={styles.shadow}
          onChangeItem={(item) =>
            this.setState({ selectedMachine: item.value })
          }
        />
        <Table borderStyle={{ borderWidth: 0.1, borderColor: "white" }}>
          <Row
            data={tableHead}
            flexArr={[2, 1, 1, 1]}
            style={{
              height: 40,
              backgroundColor: Colors.orange,
            }}
            textStyle={{
              textAlign: "center",
              color: "white",
              fontSize: 12,
            }}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={["60%"]}
              style={{
                flex: 2,
                justifyContent: "center",
                color: Colors.background,
              }}
              flexArr={[3]}
              heightArr={[56, 56]}
              textStyle={{
                textAlign: "center",
                color: "white",
                fontSize: FontSize.xLarge,
                fontWeight: "600",
              }}
            />
            <Rows
              data={tableData}
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={{ textAlign: "center", color: "white", fontSize: 12 }}
            />
          </TableWrapper>
          <TableWrapper style={{ flex: 1 }}>
            <Row
              data={footerData}
              flexArr={[2, 1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          height: 60,
          backgroundColor: Colors.text,
          padding: Spacing * 1,
        }}
      >
        <Text
          style={{
            fontSize: FontSize.large,
            fontFamily: Font["Cochin"],
            fontWeight: "400",
            color: Colors.background,
          }}
        >
          Jai Perl Drinks
        </Text>
        <Text
          style={{
            fontSize: FontSize.small,
            fontFamily: Font["Cochin"],
            fontWeight: "100",
            color: Colors.background,
          }}
        >
          Ghaziabad, Utter Pradesh
        </Text>
      </View>

      <LiveProductivity />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8, backgroundColor: "black" },
  head: { height: 40, color: Colors.background },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, color: Colors.background },
  row: { height: 28 },
  text: { textAlign: "center", color: "white", fontSize: 12 },

  dropdown: {
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  item: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
