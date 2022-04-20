import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Input } from "./Input";

export function Form() {
  const [produto, setProduto] = useState("");
  const [qtd, setQtd] = useState(0);
  const [valor, setValor] = useState(0);

  async function handleSubmit() {
    try {
      const response = await AsyncStorage.getItem(
        "@cumbucamobile:saveproducts"
      );

      const array = JSON.parse(response)
      let id;  
      if (!response) {
        id = 1;
      } else {
        array.sort((a, b) => a.id - b.id);
        let indice = array.findIndex(
          (item, index) => item.id != index + 1
          );
          
        if (indice === -1) {
          id = Number(array.length) + 1;
        } else { 
          id = Number(indice) + 1;
        }
      }

      const newProduto = {
        id,
        produto,
        qtd,
        valor,
      };

      const previousList = response ? JSON.parse(response) : [];
      const data = [...previousList, newProduto];

      await AsyncStorage.setItem(
        "@cumbucamobile:saveproducts",
        JSON.stringify(data)
      );

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.card}>
      <Input
        label="Produto"
        placeholder="Nome do Produto"
        onChangeText={setProduto}
        value={produto}
      />
      <Input
        label="Quantidade"
        placeholder="Quantidade no Estoque"
        onChangeText={setQtd}
        value={qtd}
      />
      <Input
        label="Valor"
        placeholder="Valor Unitario"
        onChangeText={setValor}
        value={valor}
      />

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.textBtn}>Incluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#FCF6F9",
  },
  btn: {
    width: "60%",
    margin: 5,
    alignItems: "center",
    borderRadius: 20,
    padding: 8,
    backgroundColor: "#212121",
  },
  textBtn: {
    color: "#fff",
    fontFamily: "Inter_600SemiBold",
  },
});
