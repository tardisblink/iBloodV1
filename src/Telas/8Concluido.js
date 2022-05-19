import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Concluido extends Component {
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

                        <Image source = {require('../Img/Confirma.png')} style = {estilos.imagem}/>

                        <View style ={estilos.viewbotao}>

                            <TouchableHighlight style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Medula')}>

                                <Text style = {estilos.textobotao}>Voltar</Text>

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
        position:'relative'
    },

    imagemfundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%",
         opacity:1
    },

    viewmenu:{
        flex:1,
        width:30,
        height:30,
        marginTop:40,
        marginLeft:20,
        opacity:1,
        position:'absolute'
    },

    imagemmenu:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'darkred'
    },

    imagem:{
        width:250, 
        height:350,
        borderRadius:10,
        borderColor:'darkred',
        opacity:0.9,
        backgroundColor:'crimson',
        borderWidth:1,
    },

    fundo:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'crimson'
    },

    viewtexto:{
        width:350,
        opacity:1,
        paddingBottom:'40%',
        justifyContent:'center',
        position:'absolute'
    },

    textoimagem:{
        color:'darkred',
        width:350,
        textAlign:'center',
        fontSize:30
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

    viewbotao:{
        alignItems:'center', 
        justifyContent:'center',
        marginTop:'10%'
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
        borderStyle:'solid'
    },
});

export default Concluido;