import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Login extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require ('../Img/Bg.png')} style = {estilos.imagemfundo}/>

                    <View style = {estilos.frente}>

                        <Image source = {require ('../Img/Logo.png')} style = {estilos.imagemlogo}/>

                        <View style = {estilos.viewinput}>

                            <TextInput style = {estilos.input} placeholder = 'Usuário' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <View style = {estilos.viewinput}>

                            <TextInput style = {estilos.input} placeholder = 'Senha' placeholderTextColor = {'black'} secureTextEntry = {true}></TextInput>

                        </View>

                        <View style ={estilos.viewbotao}>

                            <TouchableHighlight style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Main')}>

                                <Text style = {estilos.textobotao}>Entrar</Text>    

                            </TouchableHighlight>

                        </View>

                        <View style = {estilos.viewtexto}>

                            <Text style = {estilos.texto}>Não tenho uma conta</Text>

                            <TouchableHighlight onPress = {() =>this.props.navigation.navigate('SingUp')}>

                                <Text style = {estilos.textocadastro}>Criar Conta</Text>

                            </TouchableHighlight>

                        </View>

                        <View style = {estilos.viewinfo}>

                            <TouchableHighlight onPress = {() =>this.props.navigation.navigate('Sobre')}>

                                <Image source = {require ('../Img/Info.png')} style = {estilos.imageminfo}/>

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
    },

    imagemfundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"20%"
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

    imagemlogo:{
        width:200, 
        height:150,
    },

    viewinput:{
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

    viewbotao:{
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

    textobotao:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    },

    viewtexto:{
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

    textocadastro:{
        fontSize:17, 
        textAlign:'center',
        color:'crimson'
    },

    viewinfo:{
        alignItems:'flex-start',
    },

    imageminfo:{
        width:30,
        height:30,
        backgroundColor:'crimson',
        borderRadius:30
    }
});

export default Login;