
import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native' 

import { IMG_LOGO, COLOR_PRIMARY } from '../../constants'

export default function Login(){
    return (
        <ScrollView>
            <Image source={IMG_LOGO} resizeMode='contain' style={styles.logo}/>
            <View style={styles.viewContainer}>
                <Text>Login FORM</Text>
                <CreateAccount />
            </View>
            <Divider style={styles.divider}/>
            <Text>Social login</Text>
        </ScrollView>
    )
}

const CreateAccount = () => {
    const navigation = useNavigation()
    return (
        <Text
            style={styles.textRegister}>
            ¿Aun no tienes una cuenta?
            <Text style={styles.register} onPress={() => navigation.navigate("register-stack")}> Registrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        marginTop: 20
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    register: {
        color: COLOR_PRIMARY,
        fontWeight: 'bold'
    },
    divider: {
        backgroundColor: COLOR_PRIMARY,
        margin: 40
    }
})