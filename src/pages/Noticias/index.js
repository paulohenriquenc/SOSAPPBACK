import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

const Noticia = ({ titulo, imagem, conteudo, link }) => {
    const abrirNoticiaOriginal = () => {
        if (link) {
            Linking.openURL(link);
        }
    };

    return (
        <TouchableOpacity onPress={abrirNoticiaOriginal}>
            <View style={styles.noticiaContainer}>
                <Image
                    source={imagem}
                    style={styles.imagem}
                />
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.conteudo}>{conteudo}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default function Noticias() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../welcome/assets/logo2.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.containerForm}>
                <Noticia
                    titulo="Quais são as praias com mais ataques de tubarão no Brasil?"
                    imagem={require('../welcome/assets/praia1.jpg')}
                    conteudo="O estado de Pernambuco, localizado na região Nordeste, é o que mais registra a presença de tubarões em suas águas rasas e, consequentemente, o que possui mais interação e ataques de tubarões a banhistas. A região do Grande Recife, especialmente, é o principal foco da presença do animal – tendo, inclusive, várias placas de sinalização em praias sobre esse perigo. "
                    link="https://www.nationalgeographicbrasil.com/meio-ambiente/2024/02/quais-sao-as-praias-com-mais-ataques-de-tubarao-no-brasil"
                />

                <Noticia
                    titulo="Plano anti-tubarão de João Campos pode dar certo? Conheça iniciativas parecidas"
                    imagem={require('../welcome/assets/praia2.jpg')}
                    conteudo="Em resposta aos frequentes ataques de tubarões na Praia de Boa Viagem, o prefeito João Campos anunciou uma inovadora medida de segurança: uma rede de PVC flexível a ser instalada a 500 metros da costa. A tecnologia, projetada para permitir a livre circulação de peixes e tartarugas, visa proteger os banhistas da ameaça dos tubarões"
                    link="https://ricardoantunes.com.br/plano-anti-tubarao-de-joao-campos-pode-dar-certo-veja-iniciativas-parecidas-ao-redor-do-mundo/"
                />

                <Noticia
                    titulo="Filhote de tubarão é registrado em piscina natural em praia do Recife;"
                    imagem={require('../welcome/assets/praia3.png')}
                    conteudo="Um filhote de tubarão e um bagre foram filmados presos numa piscina natural da praia Buraco da Velha, em Brasília Teimosa, na Zona Sul do Recife. O registro, divulgado nas redes sociais da Rádio Brasília Teimosa, chamou atenção pelo fato do local ser rodeado de arrecifes e não ser considerada uma área de risco de ataque de tubarões."
                    link="https://g1.globo.com/pe/pernambuco/noticia/2023/08/29/filhotes-de-tubarao-sao-registrados-em-piscina-natural-em-praia-do-recife-confira-especie-encontrada.ghtml"
                />

                <Noticia
                    titulo="Jovem tem perna amputada após ataque de tubarão em Pernambuco; casos chegam a 3 em 1 mês"
                    imagem={require('../welcome/assets/praia4.jpg')}
                    conteudo="Um adolescente de 14 anos teve a perna direita amputada e ficou em estado grave após ser atacado por um tubarão no domingo, 5, na praia de Piedade, no município de Jaboatão dos Guararapes, na região metropolitana do Recife. O jovem, mordido na coxa, foi atacado nas imediações da Igrejinha de Piedade - área em que já haviam sido registrados outros 14 ataques similares e onde a entrada no mar é proibida."
                    link="https://www.estadao.com.br/brasil/jovem-fica-em-estado-grave-apos-ataque-de-tubarao-em-pernambuco-2-caso-em-menos-de-um-mes/"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    containerForm: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
    noticiaContainer: {
        marginBottom: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    imagem: {
        width: '100%',
        height: 200, 
        resizeMode: 'cover',
        borderRadius: 10,
    },
    conteudo: {
        fontSize: 16,
        marginTop: 10,
        lineHeight: 22,
    },
});
