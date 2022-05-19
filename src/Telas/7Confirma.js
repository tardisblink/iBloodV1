import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, ScrollView, Alert} from 'react-native';

class Confirma extends Component {

    Alert = () =>
    Alert.alert(
        
        "ATENÇÃO: Confirma o agendamento da sua doação de sangue para:",
        "Sex, 12 de Janeiro de 2022 no Hemepar?",
        [
        {text: "Cancelar", onPress: () => this.props.navigation.navigate('')},
        {text: "Confirma", onPress: () => this.props.navigation.navigate('Concluido')}
        ]
    );

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

                        <View style = {estilos.viewtextoimagem}>


                        </View>

                        <View style = {estilos.viewtexto}>

                            <Text style = {estilos.titulo}>     O que Levar?</Text>

                            <Text style = {estilos.texto}>  Documento de Identidade com foto (RG, Carteira Profissional, Carteira de Habilitação)..</Text>

                            <Text style = {estilos.titulo}>     Pré - Doação</Text>

                            <Text style = {estilos.texto}>  -Estar em boas condições de saúde;</Text>
                            <Text style = {estilos.texto}>  -Respeitar o intervalo minímo entre doações;</Text>
                            <Text style = {estilos.texto}>  -Pesar mais de 50 kg;</Text>
                            <Text style = {estilos.texto}>  -Estar alimentado: não deve estar em jejum;</Text>
                            <Text style = {estilos.texto}>  -Evitar alimentação gordurosa (3 horas antes da doação);</Text>
                            <Text style = {estilos.texto}>  -Aguardar o intervalo  de 1h após o almoço.</Text>

                        </View>

                        <View style ={estilos.viewbotao}>

                            <TouchableHighlight style = {estilos.botao} onPress = {this.Alert}>

                                <Text style = {estilos.textobotao}>Agendar</Text>

                            </TouchableHighlight>

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
        marginTop:10,
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

    textovermelho:{
        marginTop:10,
        fontSize:22,
        fontStyle:'italic',
        color:'red',
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
    },

    viewtextoimagem:{
        width:350,
        opacity:1,
        marginTop:'3000%',
        position:'absolute'
    },

    textoimagem:{
        color:'darkred',
        width:350,
        textAlign:'center',
        fontSize:30
    },
    botao:{
        backgroundColor:'crimson',
        borderWidth:1,
        width:200,
        height:45, 
        borderRadius:25,
        fontSize:20,
        marginTop:10,
        alignItems:'center', 
        justifyContent:'center',
        borderStyle:'solid',  
    },

    textobotao:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    },

});

export default Confirma;