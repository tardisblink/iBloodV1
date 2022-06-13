import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';

class Confirma extends Component {

    Alert = () =>
    Alert.alert(
        "Atenção",
        "Confirma?",
        [
        {text: "Cancelar", onPress: () => this.props.navigation.navigate('Mapa')},
        {text: "Confirma", onPress: () => this.props.navigation.navigate('Concluido')}
        ]
    );

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

                        <TouchableOpacity onPress = {() =>this.props.navigation.navigate('')}>

                            <Image source = {require('../Img/Volta.png')} style = {estilos.img_volta}/>

                        </TouchableOpacity>

                    </View>

                    <View style = {estilos.body}>

                        <View style = {estilos.view_texto}>

                            <Text style = {estilos.titulo}>     O que Levar?</Text>

                            <Text style = {estilos.texto}>  Documento de Identidade com foto (RG, Carteira Profissional, Carteira de Habilitação)..</Text>

                            <Text style = {estilos.titulo}>     Pré - Doação</Text>

                            <Text style = {estilos.texto}>  -Estar em boas condições de saúde;</Text>
                            <Text style = {estilos.texto}>  -Respeitar o intervalo minímo entre doações;</Text>
                            <Text style = {estilos.texto}>  -Pesar mais de 50 kg;</Text>
                            <Text style = {estilos.texto}>  -Estar alimentado: não deve estar em jejum;</Text>
                            <Text style = {estilos.texto}>  -Evitar alimentação gordurosa (3 horas antes da doação);</Text>
                            <Text style = {estilos.texto}>  -Aguardar o intervalo  de 1h após o almoço.</Text>

                        </View>

                        <View style ={estilos.viewbotao}>

                            <TouchableOpacity style = {estilos.botao} onPress = {() =>this.props.navigation.navigate('Agenda')}>

                                <Text style = {estilos.texto_botao}>Prosseguir</Text>

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
        justifyContent:'center'
    },

    view_texto:{
        alignItems:'flex-start',
        paddingTop:10,
        paddingBottom:20,
        margin:10
    },

    titulo:{
        fontSize:27,
        marginTop:10,
        fontStyle:'italic',
        color:'grey',
        fontWeight:'bold'
    },

    texto:{
        marginTop:10,
        fontSize:22,
        fontStyle:'italic',
        color:'grey',
        textAlign:'justify'
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

export default Confirma;