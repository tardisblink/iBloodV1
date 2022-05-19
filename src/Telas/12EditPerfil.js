import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class EditPerfil extends Component {
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

                        <TouchableHighlight onPress = {() =>this.props.navigation.navigate('Perfil')}>

                            <Image source = {require('../Img/Volta.png')} style = {estilos.imagemvolta}/>

                        </TouchableHighlight>
    
                        </View>


                        <Image source = {require('../Img/EditAvatar.png')} style = {estilos.imagem}/>
                        <View style = {estilos.viewtitulo}>
                            <Text style = {estilos.nome}>Modo de edição de perfil</Text>
                        </View>

                        <View style = {estilos.viewinput}>
                            <TextInput style = {estilos.input} placeholder = 'Nome' placeholderTextColor = {'black'}></TextInput>
                            <TextInput style = {estilos.input} placeholder = 'Usuário' placeholderTextColor = {'black'}></TextInput>
                            <TextInput style = {estilos.input} placeholder = 'Data de Nascimento' placeholderTextColor = {'black'} keyboardType = 'number-pad'></TextInput>
                            <TextInput style = {estilos.input} placeholder = 'E-mail' placeholderTextColor = {'black'}></TextInput>
                        </View>

                        <View style = {estilos.viewinput}>
                            <TextInput style = {estilos.input} placeholder = 'Nova Senha' placeholderTextColor = {'black'}></TextInput>
                            <TextInput style = {estilos.input} placeholder = 'Confirmar nova senha' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <TouchableHighlight style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Perfil')}>

                        <Text style = {estilos.textobotao}>Salvar</Text>

                        </TouchableHighlight>

                    </View>
                    </View>
            </ScrollView>
);
}}


const estilos = StyleSheet.create({

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
    imagemmenu:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'darkred',
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
    imagemfundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%",
        opacity:1,
},
    fundo:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'crimson',
        position:'relative',
    
},
    geral:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
},
viewtitulo:{
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
imagem:{
    width:200, 
    height:200,
    borderRadius:100,
    opacity:0.9,
    borderColor:'darkred',
    backgroundColor:'crimson',
    borderWidth:1,
    opacity:0.5,
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
    padding:10,
    marginTop:10, 
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

});
export default EditPerfil;