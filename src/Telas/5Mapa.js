import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Mapa extends Component {
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

                        <TouchableHighlight onPress = {() =>this.props.navigation.navigate('Main')}>

                            <Image source = {require('../Img/Volta.png')} style = {estilos.imagemvolta}/>

                        </TouchableHighlight>

                    </View>

                        <View style = {estilos.viewtitulo}>

                            <Text style = {estilos.titulo}>Escolha o local de doação:</Text>

                        </View>

                        <View style = {estilos.viewlocal}>

                            <Image source = {require('../Img/Ponteiro.png')}/>

                            <TouchableHighlight style = {estilos.local} onPress = {() =>this.props.navigation.navigate('Confirma')}>

                                <Text style = {estilos.local}>Hemobanco</Text>

                            </TouchableHighlight>

                        </View>

                        <View style = {estilos.viewmapa}>

                            <Image source = {require('../Img/Hemobanco.png')} style = {estilos.mapa}/>

                        </View>

                        <View style = {estilos.viewlocal}>

                            <Image source = {require('../Img/Ponteiro.png')}/>

                            <TouchableHighlight style = {estilos.local} onPress = {() =>this.props.navigation.navigate('Confirma')}>

                                <Text style = {estilos.local}>Hemepar</Text>

                            </TouchableHighlight>

                        </View>

                        <View style = {estilos.viewmapa}>

                            <Image source = {require('../Img/Hemepar.png')} style = {estilos.mapa}/>

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

    viewtitulo:{
        alignItems:'center',
        marginBottom:30
    },

    titulo:{
        fontSize:25,
        fontStyle:'italic',
        color:'grey',
        textDecorationLine:'underline'
    },

    local:{
        fontSize:30,
        fontStyle:'italic',
        color:'crimson',
        textDecorationLine:'underline'
    },

    viewlocal:{
        width:350,
        backgroundColor:'lightgrey',
        paddingTop:20,
        paddingLeft:20,
        alignItems:'flex-start',
        flexDirection:'row',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },

    viewmapa:{
        width:350,
        backgroundColor:'lightgrey',
        paddingBottom:20,
        marginBottom:20,
        alignItems:'center',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },

    mapa:{
        width:300,
        borderRadius:25,
        borderWidth:1,
        borderColor:'crimson'
    }
});

export default Mapa;