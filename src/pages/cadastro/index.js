import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios'; 
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/cadastro', formData);
            console.log(response.data);
           
            navigation.navigate('Perfil');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
    };

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
                    <Text style={[styles.title, { color: '#FFF' }]}>Nome</Text>
                    <TextInput
                        placeholder="Digite seu nome..."
                        style={[styles.input, { color: '#FFF', borderBottomColor: '#FFF' }]}
                        onChangeText={(text) => handleChange('name', text)}
                    />

                    <Text style={[styles.title, { color: '#FFF' }]}>E-mail</Text>
                    <TextInput
                        placeholder="Digite seu email..."
                        style={[styles.input, { color: '#FFF', borderBottomColor: '#FFF' }]}
                        onChangeText={(text) => handleChange('email', text)}
                    />

                    <Text style={[styles.title, { color: '#FFF' }]}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha..."
                        style={[styles.input, { color: '#FFF', borderBottomColor: '#FFF' }]}
                        secureTextEntry={true}
                        onChangeText={(text) => handleChange('password', text)}
                    />

                    <Text style={[styles.title, { color: '#FFF' }]}>Confirmar Senha</Text>
                    <TextInput
                        placeholder="Confirme sua senha..."
                        style={[styles.input, { color: '#FFF', borderBottomColor: '#FFF' }]}
                        secureTextEntry={true}
                        onChangeText={(text) => handleChange('confirmPassword', text)}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text style={styles.registerText}>Já possui uma conta? Faça login.</Text>
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
});
