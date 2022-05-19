import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Perfil extends Component {
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

                        <TouchableHighlight onPress = {() =>this.props.navigation.navigate('Main')}>

                            <Image source = {require('../Img/Volta.png')} style = {estilos.imagemvolta}/>

                        </TouchableHighlight>
    
                        </View>

                        <Image source = {require('../Img/avatar.png')} style = {estilos.imagem}/>
                        <View style = {estilos.viewtitulo}>
                            <Text style = {estilos.nome}>Fulane de Teste</Text>

                        </View>

                        <View style = {estilos.viewgota}>
                            
                            <Image source = {require('../Img/Gota.png')} style = {estilos.gota0}/>
                            <Text style = {estilos.textogota0}>Doações</Text>
                        </View>

                        <View style = {estilos.viewgota}>

                            <Image source = {require('../Img/Gota.png')} style = {estilos.gota1}/>
                            <Text style = {estilos.textogota1}>Vidas Salvas</Text>
                        </View>




                        <TouchableHighlight style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('EditPerfil')}>

                        <Text style = {estilos.textobotao}>Editar Perfil</Text>

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
    borderColor:'darkred',
    backgroundColor:'crimson',
    borderWidth:1
},
gota0:{
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
gota1:{
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
    viewgota:{
        position: 'absolute',

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

textobotao:{
    color:'white', 
    fontWeight:'bold', 
    fontSize:20
},

textogota0:{
    marginTop: 7,
    color:'darkred',
    marginRight:150,
    textAlign:'center',
    fontWeight:'bold'
},
textogota1:{
    marginTop: 7,
    color:'darkred',
    marginLeft:150,
    textAlign:'center',
    fontWeight:'bold'
},


});
export default Perfil;