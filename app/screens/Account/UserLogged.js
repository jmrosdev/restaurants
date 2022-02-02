import React, { useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import { getAuth, signOut } from "firebase/auth";
import Loading from "../../components/Loading";

import {
  COLOR_BCK,
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_GREY_OUTLINE,
} from "../../constants";

export default function UserLogged() {
  const auth = getAuth();
  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  return (
    <View style={styles.container}>
      <Text>InfoUser...</Text>
      <Text>AccountOptions</Text>
      <Button
        title="Cerrar sesión"
        onPress={() => signOut(auth)}
        buttonStyle={styles.btnSingOut}
        containerStyle={styles.btnContainer}
        titleStyle={styles.btnSingOutText}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={loading} text={loadingText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  viewUserInfo: {
    minHeight: 100,
    backgroundColor: COLOR_BCK,
  },
  btnSingOut: {
    backgroundColor: COLOR_WHITE,
    borderTopWidth: 1,
    borderTopColor: COLOR_GREY_OUTLINE,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GREY_OUTLINE,
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "100%%",
  },
  btnSingOutText: {
    color: COLOR_PRIMARY,
  },
});
