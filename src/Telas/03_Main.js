import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class Main extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require('../Img/Bg.png')} style = {estilos.img_fundo}/>

                    <View style = {estilos.view_menu}>

                        <TouchableOpacity onPress = {() =>this.props.navigation.navigate('Menu')}>

                            <Image source = {require('../Img/Menu.png')} style = {estilos.img_menu}/>

                        </TouchableOpacity>

                    </View>

                    <View style = {estilos.body}>

                        <Image source = {require('../Img/Mulher.png')} style = {estilos.img_main}/>

                        <View style = {estilos.view_texto_img_main}>

                            <Text style = {estilos.texto_img_main}>Doe Sangue e Salve Vidas!</Text>

                        </View>

                        <View style ={estilos.view_botao}>

                            <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Mapa')}>

                                <Text style = {estilos.texto_botao}>Doe Aqui</Text>

                            </TouchableOpacity>

                        </View>

                        <View style ={estilos.view_botao}>

                            <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Quest')}>

                                <Text style = {estilos.texto_botao}>Saiba se está Apto</Text>

                            </TouchableOpacity>

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

    img_fundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%",
        opacity:1,
    },

    view_menu:{
        flex:1,
        width:30,
        height:30,
        marginTop:40,
        marginLeft:20,
        opacity:1,
        position:'absolute',
    },

    img_menu:{
        width:30,
        height:30,
        padding:17,
    },

    body:{
        flex:2,
        paddingBottom:'10%',
        paddingTop:40,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor:'white',
        alignItems:'center', 
        justifyContent:'center'
    },

    img_main:{
        width:350, 
        height:200,
        borderRadius:30,
        borderColor:'darkred',
        opacity:0.4,
        backgroundColor:'crimson',
        borderWidth:1
    },

    view_texto_img_main:{
        width:350,
        opacity:1,
        paddingBottom:'55%',
        justifyContent:'center',
        position:'absolute'
    },

    texto_img_main:{
        color:'darkred',
        width:350,
        textAlign:'center',
        fontSize:30
    },

    view_botao:{
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
        marginTop:10,
        alignItems:'center', 
        justifyContent:'center',
        borderStyle:'solid',  
    },

    texto_botao:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    },
});

export default Main;