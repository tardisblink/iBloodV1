import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';


class Quest extends Component {


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


                        <View style = {estilos.view_texto_img_main}>

                            <Text style = {estilos.texto_img_main}>Questionário</Text>

                        </View>

                        <View style = {estilos.viewtexto}>

                        <Text style = {estilos.textoc}>Qual é o tempo da sua ultima doação? </Text>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Digite em meses' placeholderTextColor = {'grey'}></TextInput>

                        </View>

                        <View style = {estilos.viewtexto}>

                        <Text style = {estilos.textoc}>Qual é sua idade? </Text>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Digite' placeholderTextColor = {'grey'}keyboardType = 'number-pad'></TextInput>

                        </View>

                        <View style = {estilos.viewtexto}>

                        <Text style = {estilos.textoc}>Qual é seu peso? </Text>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Digite' placeholderTextColor = {'grey'}></TextInput>

                        </View>

                        <View style = {estilos.viewtexto}>

                        <Text style = {estilos.textoc}>Esteve doente nos últimos 30 dias? </Text>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Responda' placeholderTextColor = {'grey'}></TextInput>

                        </View>
                        <View style ={estilos.view_botao}>

                            <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Main')}>

                                <Text style = {estilos.texto_botao}>Salvar</Text>

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
        width:330, 
        height:120,
        borderRadius:30,
        borderColor:'darkred',
        opacity:0.4,
        backgroundColor:'crimson',
        borderWidth:1
    },

    view_texto_img_main:{
        width:350,
        opacity:1,
        justifyContent:'center',

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

    texto_botao:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
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
        width:270,
        height:45,
        fontSize:15,
        padding:10,
        marginBottom:10, 
    },
    viewtexto:{
        //alignItems:'flex-start',
        paddingTop:10,
        paddingBottom:0,
        marginLeft: 20,
        marginRight: 20,
    },
    textoc:{
        fontSize:16,
        fontStyle:'italic',
        color:'black',
        textAlign:'left',
        opacity:0.8,
    },


});


export default Quest;