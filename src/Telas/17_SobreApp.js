import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';


class  SobreApp extends Component {
    render(){
        return(
            <ScrollView style = {estilos.geral}>

                <View style = {estilos.fundo}>

                    <Image source = {require('../Img/preto.png')} style = {estilos.imagemfundo}/>

                    <View style = {estilos.viewmenu}>

                        <TouchableOpacity onPress = {() =>this.props.navigation.navigate('Menu')}>

                            <Image source = {require('../Img/Menu.png')} style = {estilos.imagemmenu}/>

                        </TouchableOpacity>
                        
                    </View>

                    <View style = {estilos.frente}>

                        <View style = {estilos.viewtexto}>

                            <Text style = {estilos.titulo}>Sobre o app - iBlood V1</Text>
                            
                        </View>


                        <View style = {estilos.viewtexto}>
                        
                        <View style = {estilos.viewtexto}>
                        
                        <Text style = {estilos.subtitulo}>Equipe</Text>
                        </View>

                        </View>
                        <View style = {estilos.viewtexto}>

                        <Text style = {estilos.textoc}>Alberto F. - Desenvolvedor</Text>
                        <Text style = {estilos.textoc}>Celso N. - Desenvolvedor</Text>
                        <Text style = {estilos.textoc}>Everton A. - Doc./Diagramação</Text>
                        <Text style = {estilos.textoc}>Geovana P. - Doc./Diagramação</Text>

                        </View>


                        <View style = {estilos.viewtexto}>
                        </View>
                        <Text style = {estilos.subtitulo}></Text>

                            <View style = {estilos.viewlocal}>


                            <View style = {estilos.viewtexto}>
                            <Text style = {estilos.subtitulo}>Especificações técnicas:</Text>
                            <Text style = {estilos.texto}></Text>
                            <Text style = {estilos.texto}>VERSÃO DO APP: iblood@1.0.0 </Text>
                            <Text style = {estilos.texto}>Versão NodeJS: 16.15.0</Text>
                            <Text style = {estilos.texto}>Versão expo: ~44.0.0</Text>
                            <Text style = {estilos.texto}>Versão expo-status-bar: ~1.2.0</Text>
                            <Text style = {estilos.texto}>Versão (R): 17.0.1</Text>
                            <Text style = {estilos.texto}>Versão (R)-dom: 17.0.1</Text>
                            <Text style = {estilos.texto}>Versão (RN): 0.64.3</Text>
                            <Text style = {estilos.texto}>Versão (RN)-safe-area-context: 3.3.2</Text>
                            <Text style = {estilos.texto}>Versão (RN)-screens: ~3.10.1</Text>
                            <Text style = {estilos.texto}>Versão (RN)-web: 0.17.1</Text>
                            <Text style = {estilos.texto}>Versão (RN)-picker/picker: ^2.4.1</Text>
                            <Text style = {estilos.texto}>Versão (R)-navigation/native: ^6.0.10</Text>
                            <Text style = {estilos.texto}>Versão (R)-navigation/native-stack: ^6.6.1</Text>
                            <Text style = {estilos.legenda}></Text>
                            <Text style = {estilos.legenda}>LEGENDA: (R) = React | (RN) = React Native</Text>
                            </View>
                            
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
        marginTop:40,
        marginLeft:20,
        opacity:1,
        position:'absolute',
    },

    imagemmenu:{
        width:30,
        height:30,
        padding:17,
    },

    frente:{
        flex:2,
        paddingBottom:'10%',
        paddingTop:10,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor:'white',
        alignItems:'center', 
        justifyContent:'center'
    },

    imagem:{
        width:350, 
        height:250,
        borderRadius:30,
        borderColor:'darkred',
        opacity:0.4,
        backgroundColor:'black',
        borderWidth:1
    },

    viewtexto:{
        //alignItems:'flex-start',
        paddingTop:0,
        paddingBottom:0,
        marginLeft: 20,
        marginRight: 20,
    },
    textoc:{
        fontSize:16,
        fontStyle:'italic',
        color:'black',
        textAlign:'justify',
        opacity:0.8,
    },
    titulo:{
        fontSize:20,
        fontStyle:'italic',
        color:'black',
        fontWeight:'bold',
        alignItems: 'center'
    },

    subtitulo:{
        fontSize:15,
        fontStyle:'italic',
        color:'black',
        fontWeight:'bold',
        alignItems: 'center',
        marginTop: 10,
        textAlign: 'center'
    },

    texto:{
        fontSize:15,
        fontStyle:'italic',
        color:'grey',
        textAlign:'left',
    },

    legenda:{
        fontSize:10,
        fontStyle:'italic',
        color:'grey',
        textAlign:'left',
    },

    info:{
        marginTop:20,
        fontSize:15,
        fontStyle:'normal',
        color:'grey',
        textAlign:'left',
        textDecorationLine:'underline'
    },

    nome:{
        marginTop:20,
        fontSize:25,
        fontStyle:'normal',
        fontWeight:'bold',
        color:'darkred',
        textAlign:'justify'
    },

    


    viewlocal:{
        width:330,
        height:400,
        paddingBottom: 20, 
        alignItems:'flex-start',
        flexDirection:'row',
        borderRadius:25,
        borderColor:'black',
        borderWidth:1,
    },
});

export default SobreApp;