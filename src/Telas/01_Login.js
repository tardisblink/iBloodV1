import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';


class Login extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require ('../Img/Bg.png')} style = {estilos.img_fundo}/>

                    <View style = {estilos.body}>

                        <Image source = {require ('../Img/Logo.png')} style = {estilos.img_logo}/>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Usuário' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Senha' placeholderTextColor = {'black'} secureTextEntry = {true}></TextInput>

                        </View>

                        <View style ={estilos.view_botao}>

                            <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Main')}>

                                <Text style = {estilos.texto_botao}>Entrar</Text>    

                            </TouchableOpacity>

                        </View>

                        <View style = {estilos.view_texto}>

                            <Text style = {estilos.texto}>Não tenho uma conta</Text>

                            <TouchableOpacity onPress = {() =>this.props.navigation.navigate('SingUp')}>

                                <Text style = {estilos.texto_cadastro}>Criar Conta</Text>

                            </TouchableOpacity>

                        </View>

                        <View style = {estilos.view_info}>

                            <TouchableOpacity onPress = {() =>this.props.navigation.navigate('Sobre')}>

                                <Image source = {require ('../Img/Info.png')} style = {estilos.img_info}/>

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
    },

    img_fundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"20%"
    },

    body:{
        flex:2,
        paddingBottom:'10%',
        paddingTop:80,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor:'white',
        alignItems:'center', 
        justifyContent:'center'
    },

    img_logo:{
        width:200, 
        height:150,
    },

    view_input:{
        marginTop:10, 
        marginLeft:20, 
        marginRight:20, 
    },

    input:{
        borderColor:'black',
        backgroundColor:'lightgray',
        color:'black',
        borderWidth:1,
        width:200,
        height:45,
        borderRadius:25,
        fontSize:20,
        padding:10
    },

    view_botao:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center'
    },

    botao:{
        backgroundColor:'crimson',
        borderWidth:1,
        width:200,
        height:45, 
        borderRadius:25,
        fontSize:20,
        marginTop:30,
        alignItems:'center', 
        justifyContent:'center',
        borderStyle:'solid',  
    },

    texto_botao:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    },

    view_texto:{
        marginTop:20,
        marginBottom:10, 
        marginLeft:20, 
        marginRight:20, 
    },

    texto:{
        fontSize:17, 
        textAlign:'center',
        color:'grey'
    },

    texto_cadastro:{
        fontSize:17, 
        textAlign:'center',
        color:'crimson'
    },

    view_info:{
        alignItems:'flex-start',
    },

    img_info:{
        width:30,
        height:30,
        backgroundColor:'crimson',
        borderRadius:30
    }
});

export default Login;