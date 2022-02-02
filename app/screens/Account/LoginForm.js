import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { formLoginValidate } from "../../utils/validations";
import Loading from "../../components/Loading";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

import { COLOR_PRIMARY, COLOR_ICON_PLACEHOLDER } from "../../constants";

function LoginForm(props) {
  const { toastRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultValue());
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();

  const onChange = (event, type) => {
    setFormData({ ...formData, [type]: event?.nativeEvent.text });
  };

  const onSubmit = () => {
    const { isValidForm, errorType } = formLoginValidate(formData);

    if (!isValidForm) {
      toastRef.current.show(errorType);
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((response) => {
          console.log(response);
          setLoading(false);
          navigation.navigate("account-stack");
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          toastRef.current.show("El email o la contraseña es incorrecta");
        });
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChange={(e) => onChange(e, "email")}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChange={(e) => onChange(e, "password")}
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={() => onSubmit()}
      />
      <Loading isVisible={loading} text="Inicindo sesión" />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: COLOR_PRIMARY,
  },
  icon: {
    color: COLOR_ICON_PLACEHOLDER,
  },
});

function defaultValue() {
  return {
    email: "",
    password: "",
  };
}

export default LoginForm;
