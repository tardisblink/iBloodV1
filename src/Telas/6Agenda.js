import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Agenda extends Component {
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


<View style = {estilos.constr}>
            <Text style = {estilos.textoimagem}> EM CONSTRUÇÃO </Text>
            </View>
            </View>

            <View style = {estilos.frente}>
                <Image source = {require('../Img/Erro.png')} style = {estilos.imagem}/>

                <View style ={estilos.viewbotao}>
            <TouchableHighlight style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Main')}>
                <Text style = {estilos.textobotao}> Voltar </Text>                                       
            </TouchableHighlight>
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
        height:150,
        paddingBottom:"10%",
        opacity:1,
    },

    viewmenu:{
        flex:1,
        width:30,
        height:30,
        padding:20,
        opacity:1,
        position:'absolute',
    },

    imagemmenu:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'darkred',
    },

    imagem:{
        width:350, 
        height:250,
        borderRadius:30,
        borderColor:'darkred',
        opacity:0.4,
        backgroundColor:'crimson',
        borderWidth:1
    },

    geral:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },

    fundo:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'black',
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
        padding:20,
        opacity:1,
        position:'absolute',
    },

    imagemmenu:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'crimson',
    },

    imagem:{
        width:250, 
        height:250,
        borderRadius:10,
        borderColor:'yellow',
        opacity:0.9,
        backgroundColor:'yellow',
        borderWidth:1,


    },

    fundo:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'yellow'
    },
    viewtexto:{
        width:350,
        opacity:1,
        paddingBottom:'40%',
        justifyContent:'center',
        color:'black',
        position:'absolute'

    },

    textoimagem:{
        color:'black',
        width:350,
        textAlign:'center',
        fontSize:35
    },

    
    frente:{
        flex:0,
        paddingBottom:'100%',
        paddingTop:40,
        borderTopStartRadius:0,
        borderTopEndRadius:0,
        backgroundColor:'white',
        alignItems:'center', 
        justifyContent:'center'
    },
    viewbotao:{
        alignItems:'center', 
        justifyContent:'center',
        marginTop:'30%'
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

    constr:{
        backgroundColor:'yellow',
        width:400,
        height:45, 
        fontSize:50,
        alignItems:'center', 
        justifyContent:'center',
    
    },

});

export default Agenda;