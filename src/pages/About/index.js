import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function About() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Image
                    source={require('../welcome/assets/logo2.png')}
                    style={styles.logo}
                />
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.message}>Sobre Nós</Text>
                <Text style={styles.text}>
                    "SOS Recife", iniciativa liderada por Paulo e Thiago da Faculdade Uninassau, é dedicada à segurança dos banhistas na orla do Recife. Nosso objetivo é implementar soluções inovadoras para reduzir os riscos de incidentes com tubarões. Queremos proporcionar um ambiente seguro e consciente para todos que desfrutam das praias da região.
                </Text>
                <Image
                    source={require('../welcome/assets/praia5.jpg')}
                    style={styles.image}
                />
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ccff',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '5%',
        paddingHorizontal: '5%',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000', 
        marginTop: 20,
        textAlign: 'center', 
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
        marginBottom: 10, 
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover', 
        marginTop: 100, 
    },
});
