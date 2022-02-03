import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";

export default FormAdd = (props) => {
  const { setRestaurantName, setRestaurantAddress, setRestaurantDescription } =
    props;
  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Nombre del restaurante"
        containerStyle={styles.input}
        onChange={(e) => setRestaurantName(e.nativeEvent.text)}
      />
      <Input
        placeholder="Dirección"
        containerStyle={styles.input}
        onChange={(e) => setRestaurantAddress(e.nativeEvent.text)}
      />
      <Input
        placeholder="Descripción del restaurante"
        multiline
        inputContainerStyle={styles.textArea}
        onChange={(e) => setRestaurantDescription(e.nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
  },
});
