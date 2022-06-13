import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class Mapa extends Component {
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

                    <View style = {estilos.view_volta}>

                        <TouchableOpacity onPress = {() =>this.props.navigation.navigate('Main')}>

                            <Image source = {require('../Img/Volta.png')} style = {estilos.img_volta}/>

                        </TouchableOpacity>

                    </View>

                    <View style = {estilos.body}>

                        <View style = {estilos.view_titulo}>

                            <Text style = {estilos.titulo}>Escolha o local de doação:</Text>

                        </View>

                        <View style = {estilos.view_local}>

                            <Image source = {require('../Img/Ponteiro.png')}/>

                            <TouchableOpacity style = {estilos.local} onPress = {() =>this.props.navigation.navigate('Confirma')}>

                                <Text style = {estilos.local}>Hemobanco</Text>

                            </TouchableOpacity>

                        </View>

                        <View style = {estilos.view_mapa}>

                            <Image source = {require('../Img/Hemobanco.png')} style = {estilos.mapa}/>

                        </View>

                        <View style = {estilos.view_local}>

                            <Image source = {require('../Img/Ponteiro.png')}/>

                            <TouchableOpacity style = {estilos.local} onPress = {() =>this.props.navigation.navigate('Confirma')}>

                                <Text style = {estilos.local}>Hemepar</Text>

                            </TouchableOpacity>

                        </View>

                        <View style = {estilos.view_mapa}>

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

    img_fundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%",
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

    view_volta:{
        flex:1,
        width:'100%',
        height:30,
        marginTop:40,
        paddingRight:20,
        opacity:1,
        position:'absolute',
        alignItems:"flex-end"
    },

    img_menu:{
        width:30,
        height:30,
        padding:17,
    },

    img_volta:{
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
    },

    view_titulo:{
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

    view_local:{
        width:350,
        backgroundColor:'lightgrey',
        paddingTop:20,
        paddingLeft:20,
        alignItems:'flex-start',
        flexDirection:'row',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },

    view_mapa:{
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