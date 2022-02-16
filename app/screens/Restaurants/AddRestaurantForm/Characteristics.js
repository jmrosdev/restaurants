import React from "react";
import { StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-elements";
import { uniqueId } from 'lodash'

const Characteristics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo de comida</Text>
      <View style={styles.chipsContainer}>
        {foodType.map((type, i) => {
          return (
            <Chip
              key={uniqueId(i)}
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
    marginLeft: 10    
  },
  title: {
    fontWeight: "bold",
  },
  chip: {
    width: "auto",
    marginRight: 10,
    marginTop: 10,
  },
  chipsContainer: {
    flexDirection: "row",
    height: 'auto',
    flexWrap: 'wrap',
  },
});

const foodType = [
  "mexicana",
  "italiana",
  "mediterranea",
  "asiatica",
  "japonesa",
];
