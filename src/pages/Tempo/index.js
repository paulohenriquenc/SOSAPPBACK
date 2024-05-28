import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

const API_KEY = 'e2ac54cf931b53cbbc7eb82c21940ade';
const CITY_ID = '3407758'; // ID de Recife na OpenWeatherMap

export default function Tempo() {
    const [previsao, setPrevisao] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=3407758&appid=e2ac54cf931b53cbbc7eb82c21940ade&lang=pt_br&units=metric`)
            .then(response => response.json())
            .then(data => {
                setPrevisao(data);
                setIsLoading(false);
            })
            .catch(error => console.error('Erro ao buscar previsão do tempo:', error));
    }, []);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#044fa1" />
            </View>
        );
    }

    if (!previsao || !previsao.main) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Erro ao carregar previsão do tempo</Text>
            </View>
        );
    }

    const temperaturaAtual = previsao.main.temp;
    const descricao = previsao.weather[0].description;
    const umidade = previsao.main.humidity;
    const velocidadeVento = previsao.wind.speed;

    return (
        <View style={styles.container}>
            <Image
                source={require('../welcome/assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.titulo}>Previsão do Tempo para Recife</Text>
            <View style={styles.card}>
                <Text style={styles.texto}>Temperatura: {temperaturaAtual}°C</Text>
                <Text style={styles.texto}>Descrição: {descricao}</Text>
                <Text style={styles.texto}>Umidade: {umidade}%</Text>
                <Text style={styles.texto}>Velocidade do vento: {velocidadeVento} m/s</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 20,
    },
    logo: {
        width: 250, 
        height: 150, 
        resizeMode: 'contain', 
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 20,
        width: '100%',
    },
    texto: {
        fontSize: 18,
        marginBottom: 10,
    },
    error: {
        fontSize: 18,
        color: 'red',
    },
});
