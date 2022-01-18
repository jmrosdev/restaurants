import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native' 
import { COLOR_PRIMARY } from '../../constants'

const image_userGuest = require('../../../assets/user-guest.jpg')

export default function UserGuest() {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.viewBody}>
            <Image style={styles.image} source={image_userGuest} resizeMode='contain'/>
            <Text style={styles.title}>Consulta tu perfil</Text>
            <Text style={styles.descripcion}>Busca y visualiza los mejores restaurantes de forma sencilla</Text>
            <View style={styles.viewBtn}>
                <Button 
                    title="Ver tu perfil"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("login-stack")}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,        
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10,
        textAlign: 'center'
    },
    descripcion: {
        textAlign: 'center',
        marginBottom: 20,
    },
    viewBtn: {
        flex: 1,
        alignItems: 'center'
    },
    btnStyle: {
        backgroundColor: COLOR_PRIMARY
    },
    btnContainer: {
        width: '70%'
    }

})