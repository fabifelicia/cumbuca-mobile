import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, FlatList, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "../components/Header";
import { HeaderList } from "../components/HeaderList";
import { Form } from "../components/Form";

export default function Home() {
  const [data, setData] = useState([]);

  async function handleFetchData() {
    const response = await AsyncStorage.getItem("@cumbucamobile:saveproducts");
    const data = response ? JSON.parse(response) : [];    
    setData(data);
  }

  useEffect(() => {
    handleFetchData();
  }, []);

 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Text style={styles.title}>Incluir Produto</Text>
      <Form />
      <Text style={styles.title}>Lista de Produtos</Text>
      <HeaderList />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.id}</Text>
            <Text>{item.produto}</Text>
            <Text>-</Text>
            <Text>{item.qtd}</Text>
            <Text>+</Text>
            <Text>{item.valor}</Text>
            <Text>{item.qtd * item.valor}</Text>
            <Text>X</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Inter_600SemiBold",
  },
  item: {
    color: 'yellow',
    margin: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
