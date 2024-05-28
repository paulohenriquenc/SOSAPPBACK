import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../welcome/assets/logo2.png')}
                    style={styles.logo}
                />
                <Image
                    source={require('../welcome/assets/tuba.jpg')}
                    style={styles.profilePic}
                />
                <Text style={styles.name}>NOME</Text>
                <Text style={styles.email}>EMAIL@aaa.com</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.label}>Idade:</Text>
                <Text style={styles.value}>X</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.label}>Localização:</Text>
                <Text style={styles.value}>Recife, PE</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.value}>(XX) X XXXXX-XXXX</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    details: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        width: 100,
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
});
