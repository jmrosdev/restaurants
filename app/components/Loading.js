import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements'
import { COLOR_PRIMARY, COLOR_WHITE } from '../constants'

export default function Loading(props) {
    const { isVisible, text } = props

    return (
        <Overlay 
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
        >
            <View style={styles.view}>
                <ActivityIndicator size="large" color={COLOR_PRIMARY}/>
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: COLOR_WHITE,
        borderColor: COLOR_PRIMARY,
        borderWidth: 2,
        borderRadius: 10
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: COLOR_PRIMARY,
        textTransform: "uppercase",
        marginTop: 10
    }
})
