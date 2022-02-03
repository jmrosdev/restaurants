import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants/Restaurants";
import AddRestaurants from "../screens/Restaurants/AddRestaurants";

const Stack = createNativeStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants-stack"
        component={Restaurants}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name="add-restaurant"
        component={AddRestaurants}
        options={{ title: "Añadir nuevo restaurante" }}
      />
    </Stack.Navigator>
  );
}
