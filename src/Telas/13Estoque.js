import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Estoque extends Component {
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

        <View style = {estilos.viewvolta}>

            <TouchableHighlight onPress = {() =>this.props.navigation.navigate('Menu')}>

                <Image source = {require('../Img/Volta.png')} style = {estilos.imagemvolta}/>

            </TouchableHighlight>

        </View>

        <View style = {estilos.viewtitulo}>

            <Text style = {estilos.titulo}>Estoque</Text>

        </View>

            <Image source = {require('../Img/Estoque.png')} style = {estilos.imagem}/>

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

    viewvolta:{
        flex:1,
        width:'100%',
        height:30,
        marginTop:20,
        paddingRight:20,
        opacity:1,
        position:'absolute',
        alignItems:"flex-end"
    },

    imagemmenu:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'darkred',
    },

    imagemvolta:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'white',
    },

    frente:{
        flex:2,
        paddingBottom:'10%',
        paddingTop:80,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor:'white',
        alignItems:'center', 
    },

    imagem:{
        width:400, 
        height:470,
        borderColor:'darkred',
        marginBottom:20,
        borderWidth:1,
    },

    viewtitulo:{
        alignItems:'center',
        marginBottom:30
    },

    titulo:{
        fontSize:27,
        fontStyle:'italic',
        color:'grey',
        fontWeight:'bold'
    },


});

export default Estoque;