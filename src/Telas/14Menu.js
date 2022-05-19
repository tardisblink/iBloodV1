import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';


class Menu extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require('../Img/Bg.png')} style = {estilos.imagemfundo}/>

                    <View style = {estilos.frente}>

                        <View style ={estilos.escolha}>

                            <TouchableHighlight style = {estilos.botaoescolha} onPress = {() =>this.props.navigation.navigate('Main')}>

                                <Image source = {require('../Img/Icone1.png')} style = {estilos.icone}/>

                            </TouchableHighlight>

                            <Text style = {estilos.texto}>Inicio</Text>

                        </View>

                        <View style ={estilos.escolha}>

                            <TouchableHighlight style = {estilos.botaoescolha} onPress = {() =>this.props.navigation.navigate('Mapa')}>

                                <Image source = {require('../Img/Icone2.png')} style = {estilos.icone}/>

                            </TouchableHighlight>

                            <Text style = {estilos.texto}>Locais de Doação</Text>

                        </View>

                        <View style ={estilos.escolha}>

                            <TouchableHighlight style = {estilos.botaoescolha} onPress = {() =>this.props.navigation.navigate('Perfil')}>

                                <Image source = {require('../Img/Icone3.png')} style = {estilos.icone}/>

                            </TouchableHighlight>

                            <Text style = {estilos.texto}>Perfil</Text>

                        </View>

                        <View style ={estilos.escolha}>

                            <TouchableHighlight style = {estilos.botaoescolha} onPress = {() =>this.props.navigation.navigate('Estoque')}>

                                <Image source = {require('../Img/Icone4.png')} style = {estilos.icone}/>

                            </TouchableHighlight>

                            <Text style = {estilos.texto}>Estoque</Text>

                        </View>

                        <View style ={estilos.escolha}>

                            <TouchableHighlight style = {estilos.botaoescolha} onPress = {() =>this.props.navigation.navigate('Sobre')}>

                                <Image source = {require('../Img/Icone5.png')} style = {estilos.icone}/>

                            </TouchableHighlight>

                            <Text style = {estilos.texto}>Sobre</Text>

                        </View>

                        <View style ={estilos.escolhasair}>

                            <TouchableHighlight style = {estilos.botaoescolha} onPress = {() =>this.props.navigation.navigate('Login')}>

                                <Image source = {require('../Img/Icone6.png')} style = {estilos.icone}/>

                            </TouchableHighlight>

                            <Text style = {estilos.textosair}>Sair</Text>

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
        justifyContent:"flex-start"
    },

    imagemfundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%",
        opacity:1,
        position:"relative"
    },

    frente:{
        flex:2,
        paddingBottom:'10%',
        paddingTop:40,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor:'white',
        alignItems:'center', 
        justifyContent:'center',
    },

    escolha:{
        marginTop:25,
        marginBottom:25,
        width:"80%",
        height:60,
        flexDirection:"row",
        alignItems:'flex-start',
        justifyContent:'center',
        borderWidth:2,
        borderRadius:20
    },

    escolhasair:{
        marginTop:25,
        marginBottom:25,
        width:"80%",
        height:60,
        flexDirection:"row",
        backgroundColor:'crimson',
        alignItems:'flex-start',
        justifyContent:'center',
        borderWidth:2,
        borderRadius:20
    },

    botaoescolha:{
        width:"100%",
        height:60,
        flexDirection:"row",
        alignItems:'flex-start',
        borderRadius:20
    },

    icone:{
        marginTop:10,
        marginLeft:50,
        width:35,
        height:35,
    },

    texto:{
        marginTop:17,
        fontWeight:"bold",
        color:'black',  
        fontSize:20,
        marginLeft:100,
        position:"absolute"
    },

    textosair:{
        marginTop:17,
        fontWeight:"bold",
        color:'white',  
        fontSize:20,
        marginLeft:100,
        position:"absolute"
    },
});

export default Menu;