import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function HeaderList() {
  const [data, setData] = useState([]);

  async function orderedListById() {
    const response = await AsyncStorage.getItem("@cumbucamobile:saveproducts");
    const data = response ? JSON.parse(response) : [];

    data.sort((a, b) => a.id - b.id);
    setData(data);
  }

  async function orderedListByName() {
    const response = await AsyncStorage.getItem("@cumbucamobile:saveproducts");
    const data = response ? JSON.parse(response) : [];

    data.sort((a, b) => a.produto - b.produto);
    setData(data);
  }

  async function orderedListByQtd() {
    const response = await AsyncStorage.getItem("@cumbucamobile:saveproducts");
    const data = response ? JSON.parse(response) : [];

    data.sort((a, b) => a.qtd - b.qtd);
    setData(data);
  }

  async function orderedListByValue() {
    const response = await AsyncStorage.getItem("@cumbucamobile:saveproducts");
    const data = response ? JSON.parse(response) : [];

    data.sort((a, b) => a.valor - b.valor);
    setData(data);
  }



  return (
    <View style={styles.headerList}>
      <Text onPress={orderedListById}>ID</Text>
      <Text onPress={orderedListByName}>Produto</Text>
      <Text onPress={orderedListByQtd}>Qtd</Text>
      <Text onPress={orderedListByValue}>Valor</Text>
      <Text>Total</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
