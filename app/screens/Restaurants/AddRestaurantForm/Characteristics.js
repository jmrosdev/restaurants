import React from "react";
import { StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-elements";

const Characteristics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo de comida</Text>
      <View style={styles.chipsContainer}>
        {foodType.map((type, i) => {
          return (
            <Chip
              id={i}
              title={type}
              type="outline"
              containerStyle={styles.chip}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Characteristics;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
  },
  chip: {
    width: "auto",
    marginRight: 10,
  },
  chipsContainer: {
    marginTop: 10,
    flexDirection: "row",
    maxWidth: 100,
  },
});

const foodType = [
  "mexicana",
  "italiana",
  "mediterranea",
  "asiatica",
  "japonesa",
];
