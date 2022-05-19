import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Sobre extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require('../Img/Bg.png')} style = {estilos.imagemfundo}/>

                    <View style = {estilos.viewmenu}>

                        <TouchableHighlight onPress = {() =>this.props.navigation.navigate('Menu')}>

                            <Image source = {require('../Img/Menu.png')} style = {estilos.imagemmenu}/>

                        </TouchableHighlight>
                        
                    </View>

                    <View style = {estilos.frente}>

                        <Image source = {require('../Img/Sobre.png')} style = {estilos.imagem}/>

                        <View style = {estilos.viewtexto}>

                            <Text style = {estilos.titulo}>Você sabia a Importância da doação?</Text>

                            <Text style = {estilos.texto}>      Em janeiro de 2022 bancos de sangue nacionais e internacionais passam por um alerta de baixo estoque, causado por diversos fatores, mas principalmente pela pandemia do COVID-19, com imposição de restrições de circulação e isolamento social, os doadores deixaram de continuar com seu cronograma de doação por medo do vírus.</Text>

                            <Text style = {estilos.texto}>      No entanto, com este período de imunizações, vacinados contra a COVID-19 podem doar, basta aguardar dois dias depois da dose mais recente da CoronaVac ou sete dias dos demais imunizantes.</Text>

                            <Text style = {estilos.texto}>      Então quando pensamos em doação, não é somente o ato de doar seu sangue, já parou para refletir que está salvando vidas, isso mesmo vidas, uma bolsa de sangue pode salvar em torno de 4 pessoas, ou seja, fornecemos um produto essencial para a sobrevivência de um indivíduo.</Text>

                            <Text style = {estilos.texto}>      O procedimento de doação dura em média 40 minutos, ou seja, menos de uma hora, além disso, doar sangue é um ato seguro e todos os materiais usados no procedimento são descartáveis. Desse modo, não há riscos de você ser contaminado ao doar sangue.</Text>

                            <Text style = {estilos.texto}>      Não deixe para fazer amanhã, o que você pode fazer hoje! faça a diferança, seja um doador e Salve vidas!!</Text>

                            <Text style = {estilos.info}>Para mais informações ligue para:</Text>

                            <Text style = {estilos.nome}>HEMOBANCO:</Text>

                            <Text style = {estilos.fone}>(41) 3023-5545</Text>

                            <Text style = {estilos.nome}>HEMEPAR:</Text>

                            <Text style = {estilos.fone}>0800 645 4555</Text>

                        </View>

                    </View>

                </View>

            </ScrollView>
        );
    }
}


const estilos = StyleSheet.create({

    geral:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },

    fundo:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'crimson',
        position:'relative',
    },

    imagemfundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%",
        opacity:1,
    },

    viewmenu:{
        flex:1,
        width:30,
        height:30,
        marginTop:40,
        marginLeft:20,
        opacity:1,
        position:'absolute',
    },

    imagemmenu:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'darkred',
    },

    frente:{
        flex:2,
        paddingBottom:'10%',
        paddingTop:80,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor:'white',
        alignItems:'center', 
        justifyContent:'center'
    },

    imagem:{
        width:350, 
        height:250,
        borderRadius:30,
        borderColor:'darkred',
        opacity:0.4,
        backgroundColor:'crimson',
        borderWidth:1
    },

    viewtexto:{
        alignItems:'flex-start',
        paddingTop:10,
        paddingBottom:20,
        margin:10
    },

    titulo:{
        fontSize:27,
        fontStyle:'italic',
        color:'grey',
        fontWeight:'bold'
    },

    texto:{
        marginTop:10,
        fontSize:22,
        fontStyle:'italic',
        color:'grey',
        textAlign:'justify'
    },

    info:{
        marginTop:20,
        fontSize:20,
        fontStyle:'normal',
        color:'grey',
        textAlign:'left',
        textDecorationLine:'underline'
    },

    nome:{
        marginTop:20,
        fontSize:25,
        fontStyle:'normal',
        fontWeight:'bold',
        color:'darkred',
        textAlign:'justify'
    },

    fone:{
        marginTop:20,
        fontSize:25,
        fontStyle:'normal',
        fontWeight:'bold',
        color:'grey',
        textAlign:'justify'
    }
    
});

export default Sobre;