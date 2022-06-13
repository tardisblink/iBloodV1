import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class Perfil extends Component {
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

                        <Image source = {require('../Img/avatar.png')} style = {estilos.img_perfil}/>

                        <View style = {estilos.view_nome}>

                            <Text style = {estilos.nome}>Joãozinho</Text>

                        </View>

                        <View style = {estilos.view_gota}>
                            
                            <Image source = {require('../Img/Gota.png')} style = {estilos.gota_0}/>

                            <Text style = {estilos.texto_gota_0}>Doações</Text>

                        </View>

                        <View style = {estilos.view_gota}>

                            <Image source = {require('../Img/Gota.png')} style = {estilos.gota_1}/>

                            <Text style = {estilos.texto_gota_1}>Vidas Salvas</Text>

                        </View>

                        <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('EditPerfil')}>

                            <Text style = {estilos.texto_botao}>Editar Perfil</Text>

                        </TouchableOpacity>

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

    view_nome:{
        alignItems:'center',
        marginBottom:30
    },

    nome:{
        fontSize:30,
        fontStyle:'italic',
        color:'black',
        fontWeight:'bold',
        marginTop:10,
    },

    img_perfil:{
        width:200, 
        height:200,
        borderRadius:100,
        borderColor:'darkred',
        backgroundColor:'crimson',
        borderWidth:1
    },

    view_gota:{
        position: 'absolute',
    },

    gota_0:{
        width:70, 
        height:70,
        borderRadius:100,
        borderColor:'darkred',
        opacity:0.5,
        backgroundColor:'white',
        borderWidth:1,
        marginRight:150,
        marginTop: 350,
    },

    texto_gota_0:{
        marginTop: 7,
        color:'darkred',
        marginRight:150,
        textAlign:'center',
        fontWeight:'bold'
    },

    gota_1:{
        width:70, 
        height:70,
        borderRadius:100,
        borderColor:'darkred',
        opacity:0.5,
        backgroundColor:'white',
        borderWidth:1,
        marginLeft:150,
        marginTop: 350,
    },

    texto_gota_1:{
        marginTop: 7,
        color:'darkred',
        marginLeft:150,
        textAlign:'center',
        fontWeight:'bold'
    },

    botao:{
        backgroundColor:'crimson',
        borderWidth:1,
        width:200,
        height:45, 
        borderRadius:25,
        fontSize:20,
        marginTop:200,
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

export default Perfil;