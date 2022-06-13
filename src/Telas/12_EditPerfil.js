import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class EditPerfil extends Component {
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

                        <TouchableOpacity onPress = {() =>this.props.navigation.navigate('Perfil')}>

                            <Image source = {require('../Img/Volta.png')} style = {estilos.img_volta}/>

                        </TouchableOpacity>

                    </View>

                    <View style = {estilos.body}>

                        <Image source = {require('../Img/EditAvatar.png')} style = {estilos.img_editperfil}/>

                        <View style = {estilos.view_titulo}>

                            <Text style = {estilos.titulo}>Modo de edição de perfil</Text>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Nome' placeholderTextColor = {'black'}></TextInput>
                            <TextInput style = {estilos.input} placeholder = 'Usuário' placeholderTextColor = {'black'}></TextInput>
                            <TextInput style = {estilos.input} placeholder = 'Data de Nascimento' placeholderTextColor = {'black'} keyboardType = 'number-pad'></TextInput>
                            <TextInput style = {estilos.input} placeholder = 'E-mail' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <View style = {estilos.view_input}>

                            <TextInput style = {estilos.input} placeholder = 'Nova Senha' placeholderTextColor = {'black'}></TextInput>
                            <TextInput style = {estilos.input} placeholder = 'Confirmar nova senha' placeholderTextColor = {'black'}></TextInput>

                        </View>

                        <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Perfil')}>

                            <Text style = {estilos.texto_botao}>Salvar</Text>

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

    view_titulo:{
        alignItems:'center',
        marginBottom:30
    },

    titulo:{
        fontSize:30,
        fontStyle:'italic',
        color:'black',
        fontWeight:'bold',
        marginTop:10,
    },

    img_editperfil:{
        width:200, 
        height:200,
        borderRadius:100,
        opacity:0.9,
        borderColor:'darkred',
        backgroundColor:'crimson',
        borderWidth:1,
        opacity:0.5,
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

    texto_botao:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    },
});

export default EditPerfil;