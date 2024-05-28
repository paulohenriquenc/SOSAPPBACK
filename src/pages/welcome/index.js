import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  
    const navigation = useNavigation();
    
    

    return (
       
       <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="fadeInUp"
                    source={require('../welcome/assets/logo.png')}
                    style={{ width: '35%' }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text> </Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerLoginForm}>
                    <Text style={[styles.title, { color: '#FFF' }]}>E-mail</Text>
                    <TextInput
                        placeholder="Digite seu email..."
                        style={[styles.input, { color: '#FFF', borderBottomColor: '#FFF' }]} 
                    />

                    <Text style={[styles.title, { color: '#FFF' }]}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha..."
                        style={[styles.input, { color: '#FFF', borderBottomColor: '#FFF' }]} 
                        secureTextEntry={true} // Adicionando esta linha para ocultar a senha
                    />

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.registerText}>Não possui uma conta? Cadastre-se.</Text>
                    </TouchableOpacity>

                </Animatable.View>
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerForm: {
        flex: 2,
        backgroundColor: '#00ccff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
    },

    containerLoginForm: {
        flex: 1,
    },

    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },

    title: {
        fontSize: 20,
        marginTop: 28,
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFF', 
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: '#FFF',
    },

    button: {
        backgroundColor: '#ffb500',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },

    registerText: {
        color: '#FFF',
    },

    containerButtons: {
        justifyContent: 'center',
        alignItems: 'center',
    },

   

   
});