import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class InfoMedula extends Component {
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

                    <View style = {estilos.body}>

                        <Image source = {require('../Img/Medula.png')} style = {estilos.img_infomedula}/>

                        <View style = {estilos.view_texto_img_infomedula}>

                            <Text style = {estilos.texto_img_infomedula}>Doação de Medula Óssea</Text>

                        </View>

                        <View style = {estilos.view_texto}>

                            <Text style = {estilos.titulo}>             O que é a Medula Óssea?</Text>

                            <Text style = {estilos.texto}>      Primeriamente, você sabe o que é e como se realiza a doação da Medula Osséa, vamos começar explicando um pouco sobre onde elas são encontradas, as mesmas são as células tronco hematopoéticas (responsáveis pela origem de todas as células do sangue e do sistema de defesa da pessoa).</Text>

                            <Text style = {estilos.titulo}>                 Qual é a finalidade?</Text>

                            <Text style = {estilos.texto}>      O transplante de medula óssea consiste na substituição de uma medula óssea doente, ou deficitária, por células normais de medula óssea, com o objetivo de reconstituição de uma nova medula.</Text>

                            <Text style = {estilos.titulo}>     Como é realizado o procedimento?</Text>

                            <Text style = {estilos.texto}>      O voluntário irá assinar um termo de consentimento livre e esclarecido (TCLE), e preencher uma ficha com informações pessoais. Será retirada uma pequena quantidade de sangue (10ml) do doador. Essas informações serão incluídas no Registro Nacional de Doadores Voluntários de Medula Óssea (REDOME).</Text>

                            <Text style = {estilos.texto}>      Quando houver um paciente com possível compatibilidade, você será consultado para decidir quanto à doação. Por este motivo, é necessário manter os dados sempre atualizados.</Text>

                            <Text style = {estilos.titulo}>     Caso ocorra compatibilidade, como prosseguir?</Text>

                            <Text style = {estilos.texto}>      O doador sendo compatível passa por exames médico e de laboratório para certificar seu bom estado de saúde. Exame de Compatibilidade é repetido, para confirmar a compatibilidade.</Text>

                            <Text style = {estilos.texto}>      No caso de doação de medula óssea por punção direta, será retirada do doador a quantidade necessária (menos de 10%), sob anestesia geral e em Centro Cirúrgico. Os doadores passam por uma pequena cirurgia de aproximadamente 90 minutos. São feitas de 4 a 8 punções na região pélvica posterior para aspirar a medula. Dentro de poucas semanas a medula estará inteiramente recomposta.</Text>

                            <Text style = {estilos.texto}>      Existe uma outra forma de doação, que utiliza uma máquina específica (aférese) para separar da corrente sanguínea, as células necessárias para o transplante. Neste caso, o doador tem que receber um medicamento antes da doação, que estimula a medula óssea a liberar estas células para a corrente sanguínea. Esta técnica só é utilizada em casos específicos, sob decisão médica e com consentimento do doador.</Text>

                            <Text style = {estilos.titulo}>                 Quais são os riscos?</Text>

                            <Text style = {estilos.texto}>      Os riscos são praticamente inexistentes. Até hoje, não há relato de nenhum acidente grave devido a este procedimento. Somente alguns relatos de um pouco de dor no local da punção. Na doação o doador é liberado no máximo um dia após a doação.</Text>

                            <Text style = {estilos.titulo}>     Quem necessita de um transplante?</Text>

                            <Text style = {estilos.texto}>      Pacientes que têm câncer que pode comprometer a função da medula óssea (ex. leucemias), pacientes com medula óssea incapaz de produzir células do sangue e pacientes com doença genética, como anemia falciforme e talassemia.</Text>

                            <Text style = {estilos.titulo}>                 Quem pode doar?</Text>

                            <Text style = {estilos.texto}>      Os requisitos para fazer uma doação de medula óssea são: ter entre 18 e 55 anos, estar em bom estado geral de saúde, não ter doenças infecciosas ou incapacitantes, doença neoplásica (câncer), hematológica (do sangue) ou do sistema imunológico.</Text>

                            <Text style = {estilos.texto_vermelho}>      Agora que você entendeu o que é a doação de Medula e o quão necessária ela é, que tal realizar o seu cadastro no dia da sua doação de sangue, ajude a salvar mais vidas!</Text>

                            <Text style = {estilos.info}>Para mais informações ligue para:</Text>

                            <Text style = {estilos.nome}>HEMOBANCO:</Text>

                            <Text style = {estilos.fone}>(41) 3023-5545</Text>

                            <Text style = {estilos.nome}>HEMEPAR:</Text>

                            <Text style = {estilos.fone}>0800 645 4555</Text>

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

    img_infomedula:{
        width:350, 
        height:250,
        borderRadius:30,
        borderColor:'darkred',
        opacity:0.4,
        backgroundColor:'crimson',
        borderWidth:1
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

    texto_vermelho:{
        marginTop:10,
        fontSize:22,
        fontStyle:'italic',
        color:'red',
        textAlign:'justify'
    },

    info:{
        marginTop:20,
        fontSize:20,
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

    fone:{
        marginTop:20,
        fontSize:25,
        fontStyle:'normal',
        fontWeight:'bold',
        color:'grey',
        textAlign:'justify'
    },

    view_texto_img_infomedula:{
        width:350,
        opacity:1,
        marginTop:'3100%',
        position:'absolute'
    },

    texto_img_infomedula:{
        color:'darkred',
        width:350,
        textAlign:'center',
        fontSize:30
    },
});

export default InfoMedula;