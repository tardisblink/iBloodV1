import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class SingUp extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require('../Img/Bg.png')} style = {estilos.imagemfundo}/>

                    <View style = {estilos.frente}>

                        <Image source = {require ('../Img/Logo.png')} style = {estilos.imagemlogo}/>

                        <View style = {estilos.viewinput}>

                            <TextInput style = {estilos.input} placeholder = 'Usuário' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <View style = {estilos.viewinput}>

                            <TextInput style = {estilos.input} placeholder = 'Data de Nascimento' placeholderTextColor = {'black'} keyboardType = 'number-pad'></TextInput>

                        </View>

                        <View style = {estilos.viewinput}>

                            <TextInput style = {estilos.input} placeholder = 'E-mail' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <View style = {{paddingTop:'10%',}}>

                            <View style = {estilos.viewinput}>

                                <TextInput style = {estilos.input} placeholder = 'Senha' placeholderTextColor = {'black'} secureTextEntry = {true}></TextInput>

                            </View>

                            <View style = {estilos.viewinput}>

                                <TextInput style = {estilos.input} placeholder = 'Confirmar Senha' placeholderTextColor = {'black'} secureTextEntry = {true}></TextInput>

                            </View>

                        </View>

                        <View style ={estilos.viewbotao}>

                            <TouchableHighlight style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Login')}>

                                <Text style = {estilos.textobotao}>Cadastrar</Text>
                                
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
        backgroundColor:'crimson'
    },

    imagemfundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%"
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

    textobotao:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    },

    viewinfo:{
        marginTop:20,
        flexDirection:'column',
        justifyContent:'flex-start'
    },

    imageminfo:{
        width:30,
        height:30,
        backgroundColor:'crimson',
        borderRadius:30
    }
});

export default SingUp;