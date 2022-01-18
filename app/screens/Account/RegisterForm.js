import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { COLOR_PRIMARY } from '../../constants'

export default function RegisterForm () {
    return (
        <View style={styles.formContainer}>
            <Input
                containerStyle={styles.inputForm}
                placeholder="Correo electronico"
            />
             <Input
                containerStyle={styles.inputForm}
                placeholder="Contraseña"
                // password={true}
                secureTextEntry={true}
            />
            <Input
                containerStyle={styles.inputForm}
                placeholder="Repite tu contraseña"
                // password={true}
                secureTextEntry={true}
            />
            <Button 
                title="Unirse"
                style={styles.btnRegisterContainer}
                buttonStyle={styles.btnRegister}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    btnRegisterContainer: {
        marginTop: 20,
        width: "100%"
    },
    btnRegister: {
        backgroundColor: COLOR_PRIMARY
    }
})