import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { COLOR_GREY_OUTLINE } from "../../../constants";

export default UploadImage = () => {
  const imageSelect = () => {
    console.log("imagenes");
  };
  return (
    <View style={styles.uploadImage}>
      <Icon
        type="material-community"
        name="camera"
        color="grey"
        containerStyle={styles.containerIcon}
        onPress={() => imageSelect()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  uploadImage: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: COLOR_GREY_OUTLINE,
  },
});
