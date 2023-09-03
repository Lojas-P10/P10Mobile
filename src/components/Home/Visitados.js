import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/* import api from '../../services/api'; */

function Card() {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={require("../../assets/bic.webp")} />
      <View>
        <Text style={{ fontSize: 17, fontWeight: "600", color: "#333" }}>
          R$1,00
        </Text>
        <Text style={{ fontSize: 15, color: "#333" }}>Caneta BIC</Text>
      </View>
      <View style={styles.btn}>
        <MaterialCommunityIcons name="heart" size={20} color="white" />
        <MaterialCommunityIcons name="cart-plus" size={20} color="white" />
      </View>
      <View style={styles.unid}>
        <Text style={{color: "white"}}>10 unidades</Text>
      </View>
    </View>
  );
}

export default function Visitados() {
  /*   const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function carregarCategorias() {
      const response = await api.get('categories');
      setCategorias(response.data);
    }
    carregarCategorias();
  }, []);
 */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Você passou por aqui ;)</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
    paddingBottom: 90,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  imagem: {
    width: "100%",
    height: 130,
    borderRadius: 10,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#00bf63",
    width: 40,
    height: 70,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: 15,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    zIndex: 5,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  unid: {
    backgroundColor: "#00bf63",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: 5,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
