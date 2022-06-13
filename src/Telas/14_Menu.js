import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class Menu extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require('../Img/Bg.png')} style = {estilos.img_fundo}/>

                    <View style = {estilos.body}>

                        <View style ={estilos.escolha}>

                            <TouchableOpacity style = {estilos.botao_escolha} onPress = {() =>this.props.navigation.navigate('Main')}>

                                <Image source = {require('../Img/Icone1.png')} style = {estilos.icone}/>

                                <Text style = {estilos.texto_botao}>Inicio</Text>
                                
                            </TouchableOpacity>

                        </View>

                        <View style ={estilos.escolha}>

                            <TouchableOpacity style = {estilos.botao_escolha} onPress = {() =>this.props.navigation.navigate('Mapa')}>

                                <Image source = {require('../Img/Icone2.png')} style = {estilos.icone}/>
                                
                                <Text style = {estilos.texto_botao}>Locais de Doação</Text>

                            </TouchableOpacity>

                        </View>

                        <View style ={estilos.escolha}>

                            <TouchableOpacity style = {estilos.botao_escolha} onPress = {() =>this.props.navigation.navigate('Perfil')}>

                                <Image source = {require('../Img/Icone3.png')} style = {estilos.icone}/>
                                
                                <Text style = {estilos.texto_botao}>Perfil</Text>

                            </TouchableOpacity>

                        </View>

                        <View style ={estilos.escolha}>

                        <TouchableOpacity style = {estilos.botao_escolha} onPress = {() =>this.props.navigation.navigate('Estoque')}>

                            <Image source = {require('../Img/Icone4.png')} style = {estilos.icone}/>
                            
                            <Text style = {estilos.texto_botao}>Estoque</Text>

                        </TouchableOpacity>

                        </View>

                        <View style ={estilos.escolha}>

                        <TouchableOpacity style = {estilos.botao_escolha} onPress = {() =>this.props.navigation.navigate('Sobre')}>

                            <Image source = {require('../Img/Icone5.png')} style = {estilos.icone}/>
                            
                            <Text style = {estilos.texto_botao}>Porque Doar</Text>

                        </TouchableOpacity>

                        </View>

                        <View style ={estilos.escolhasair}>

                            <TouchableOpacity style = {estilos.botao_escolha} onPress = {() =>this.props.navigation.navigate('Login')}>

                                <Image source = {require('../Img/Icone6.png')} style = {estilos.icone}/>

                                <Text style = {estilos.texto_botao_sair}>Sair</Text>

                            </TouchableOpacity>

                        </View>

                        <View style ={estilos.escolhasobre}>

                            <TouchableOpacity style = {estilos.botao_sobre} onPress = {() =>this.props.navigation.navigate('SobreApp')}>

                                <Image source = {require('../Img/Icone7.png')} style = {estilos.icone_sobre}/>
                                
                                <Text style = {estilos.texto_botao_sobre}>Sobre o App</Text>

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
        justifyContent:"flex-start"
    },

    img_fundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"10%",
        opacity:1,
        position:"relative"
    },

    body:{
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
        marginTop:20,
        width:"80%",
        height:45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderRadius:30
    },

    escolhasair:{
        marginTop:25,
        marginBottom:25,
        width:"80%",
        height:45,
        flexDirection:"row",
        backgroundColor:'crimson',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderRadius:30
    },

    escolhasobre:{
        marginTop:15,
        width:"65%",
        height:40,
        flexDirection:"row",
        alignItems:'flex-start',
        justifyContent:'center',
        borderWidth:2,
        borderRadius:20
    },

    botao_escolha:{
        width:"100%",
        height:45,
        alignItems:'flex-start',
        borderRadius:30
    },

    botao_sobre:{
        width:"100%",
        height:45,
        alignItems:'flex-start',
        borderRadius:20,
    },

    icone:{
        marginTop:5,
        marginLeft:5,
        width:30,
        height:30,
    },

    icone_sobre:{
        marginTop:2,
        marginLeft:5,
        width:30,
        height:30,
    },

    texto_botao:{
        marginTop:10,
        fontWeight:"bold",
        color:'black',  
        fontSize:20,
        marginLeft:100,
        position:"absolute",
    },

    texto_botao_sair:{
        marginTop:10,
        fontWeight:"bold",
        color:'white',  
        fontSize:20,
        marginLeft:100,
        position:"absolute"
    },

    texto_botao_sobre:{
        marginTop:10,
        fontWeight:"bold",
        color:'black',  
        fontSize:13,
        marginLeft:100,
        position:"absolute",

    },

});

export default Menu;