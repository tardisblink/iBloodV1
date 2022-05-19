import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Main extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require('../Img/Bg.png')} style = {estilos.imagemfundo}/>

                    <View style = {estilos.viewmenu}>

                        <TouchableHighlight onPress = {() => this.props.navigation.navigate('Menu')}>

                            <Image source = {require('../Img/Menu.png')} style = {estilos.imagemmenu}/>

                        </TouchableHighlight>

                    </View>

                    <View style = {estilos.frente}>

                        <Image source = {require('../Img/Mulher.png')} style = {estilos.imagem}/>

                        <View style = {estilos.viewtexto}>

                            <Text style = {estilos.textoimagem}>Doe Sangue e Salve Vidas!</Text>

                        </View>

                        <View style ={estilos.viewbotao}>

                            <TouchableHighlight style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Mapa')}>

                                <Text style = {estilos.textobotao}>Doe Aqui</Text>

                            </TouchableHighlight>

                        </View>

                        <View style ={estilos.viewbotao}>

                            <TouchableHighlight style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Quest')}>

                                <Text style = {estilos.textobotao}>Saiba se está Apto</Text>

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
        borderStyle:'solid',  
    },

    textobotao:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    },
});

export default Main;