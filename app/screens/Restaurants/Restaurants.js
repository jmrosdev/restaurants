import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

import { COLOR_PRIMARY, COLOR_WHITE } from "../../constants";

export default function Restaurants() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, (info) => {
      // If user not logged the state is null, if user logged setUser will be an object
      setUser(info);
    });
  }, []);

  return (
    <View style={styles.viewBody}>
      <Text>Restaurantes</Text>
      {user && (
        <Icon
          type="material-community"
          name="plus"
          color={COLOR_PRIMARY}
          reverse
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-restaurant")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
