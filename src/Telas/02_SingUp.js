import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class SingUp extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require('../Img/Bg.png')} style = {estilos.img_fundo}/>

                    <View style = {estilos.body}>

                        <Image source = {require ('../Img/Logo.png')} style = {estilos.img_logo}/>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Usuário' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Data de Nascimento' placeholderTextColor = {'black'} keyboardType = 'number-pad'></TextInput>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'E-mail' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <View style = {{paddingTop:'10%',}}>

                            <View style = {estilos.view_input}>

                                <TextInput style = {estilos.input} placeholder = 'Senha' placeholderTextColor = {'black'} secureTextEntry = {true}></TextInput>

                            </View>

                            <View style = {estilos.view_input}>

                                <TextInput style = {estilos.input} placeholder = 'Confirmar Senha' placeholderTextColor = {'black'} secureTextEntry = {true}></TextInput>

                            </View>

                        </View>

                        <View style ={estilos.view_botao}>

                            <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Login')}>

                                <Text style = {estilos.texto_botao}>Cadastrar</Text>
                                
                            </TouchableOpacity>

                        </View>

                        <View style = {estilos.view_info}>

                            <TouchableOpacity onPress = {() =>this.props.navigation.navigate('InfoMedula')}>

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
        backgroundColor:'crimson'
    },

    img_fundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%"
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

    view_info:{
        marginTop:20,
        flexDirection:'column',
        justifyContent:'flex-start'
    },

    img_info:{
        width:30,
        height:30,
        backgroundColor:'crimson',
        borderRadius:30
    }
});

export default SingUp;