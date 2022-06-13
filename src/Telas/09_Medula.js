import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class Medula extends Component {
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

                        <View style = {estilos.view_titulo}>

                            <Text style = {estilos.titulo}>Atenção</Text>

                        </View>

                        <View style = {estilos.view_texto}>

                            <Text style = {estilos.texto}>      Você sabia que pode realizar o cadastro de doador de Medula Osséa no dia do seu agendamento de doação de sangue, somente será necessário comparecer pessoalmente no Hemobanco/Hemepar, preencher o cadastro e coletar uma amostra de sangue (10ml).</Text>

                            <Text style = {estilos.texto}>      Gostaria de saber mais sobre como funciona a doação de Medula?</Text>

                            <Text style = {estilos.texto}>Clique em saiba mais e faça a diferança.</Text>

                        </View>

                        <Image source = {require('../Img/Osso.png')} style = {estilos.img_medula}/>

                        <View style ={estilos.view_botao}>

                            <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('InfoMedula')}>

                                <Text style = {estilos.texto_botao}>Saiba Mais</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Main')}>

                                <Text style = {estilos.texto_botao}>Pular</Text>

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

    img_medula:{
        width:300, 
        height:300,
        borderColor:'darkred',
        backgroundColor:'white',
        marginBottom:20,
        borderRadius:100,
        borderWidth:2,
    },

    view_titulo:{
        alignItems:'center',
    },

    titulo:{
        fontSize:35,
        color:'crimson',
        fontWeight:'bold',
        textDecorationLine:'underline'
    },

    view_texto:{
        alignItems:'center',
        paddingBottom:20,
        margin:10
    },

    texto:{
        marginTop:10,
        fontSize:22,
        fontStyle:'italic',
        color:'grey',
        textAlign:'justify'
    },

    view_botao:{
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'center',
        marginTop:'10%'
    },

    botao:{
        backgroundColor:'crimson',
        borderWidth:1,
        width:150,
        height:45, 
        borderRadius:25,
        fontSize:20,
        marginLeft:10,
        marginRight:10,
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

export default Medula;