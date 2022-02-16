import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Input, Button, AirbnbRating } from "react-native-elements";
import { COLOR_PRIMARY } from "../../../constants";

import Characteristics from "./Characteristics";

export default function AddRestaurantForm(props) {
  const { toastRef, navigation, setIsLoading } = props;
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");
  const [rating, setRating] = useState(0);

  const addRestaurant = () => {
    console.log(restaurantName);
  };

  return (
    <ScrollView styles={styles.scrollView}>
      <FormAdd
        setRestaurantName={setRestaurantName}
        setRestaurantAddress={setRestaurantAddress}
        setRestaurantDescription={setRestaurantDescription}
      />
      <Characteristics />
      {/* <View style={styles.ratingContainer}>
        <AirbnbRating
          showRating={false}
          onFinishRating={(value) => setRating(value)}
        />
      </View> */}
      <Button
        title="Crear Restaurante"
        onPress={() => addRestaurant()}
        buttonStyle={styles.buttonAddRestaurant}
      />
    </ScrollView>
  );
}

const FormAdd = (props) => {
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
  scrollView: {
    height: "100%",
  },

  buttonAddRestaurant: {
    backgroundColor: COLOR_PRIMARY,
    margin: 20,
  },

  ratingContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
  },
});
