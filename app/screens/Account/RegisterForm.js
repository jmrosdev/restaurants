import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Loading from '../../components/Loading'
import { COLOR_PRIMARY } from '../../constants'
import { formRegisterValidate } from '../../utils/validations'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from '@react-navigation/native'

export default function RegisterForm (props) {
    const { toastRef } = props
    const [formData, setFormData] = useState(defaultValueForm())
    const auth = getAuth();
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false);
    
    const onSubmit = () => {
        const { isValidForm, errorType } = formRegisterValidate(formData)        
        
        if (!isValidForm) {
            toastRef.current.show(errorType)
        } else {
            setLoading(true)
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then(response => {
                    console.log(response)
                    setLoading(false)
                    navigation.navigate("account-stack")
                })
                .catch(() => {
                    setLoading(false)
                    toastRef.current.show("Este email ya está en uso, por favor prueba con otro.")
                })
                
        }
    }

    const onChange = (event, type) => {
        setFormData({...formData, [type]: event?.nativeEvent.text} )        
    }

    return (
        <View style={styles.formContainer}>
            <Input
                containerStyle={styles.inputForm}
                placeholder="Correo electronico"
                onChange={event => onChange(event, 'email')}
            />
             <Input
                containerStyle={styles.inputForm}
                placeholder="Contraseña"
                onChange={event => onChange(event, 'password')}
                // password={true}
                secureTextEntry={true}
            />
            <Input
                containerStyle={styles.inputForm}
                placeholder="Repite tu contraseña"
                onChange={event => onChange(event, 'repeatPassword')}
                // password={true}
                secureTextEntry={true}
            />
            <Button 
                title="Unirse"
                style={styles.btnRegisterContainer}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} />
        </View>
    )
}

function defaultValueForm(){
    return {
        email : '',
        password: '',
        repeatPassword: ''
    }
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