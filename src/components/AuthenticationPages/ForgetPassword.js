import React,{Component} from 'react';
import {Text,View,ScrollView, ImageBackground,StyleSheet} from 'react-native';
import  {forgetPassword, emailChanged} from '../../actions';
import {connect} from 'react-redux'
import { Input, GirisButton } from '../../common';

class ForgetPassword extends Component {


    render(){

        return(
            <ImageBackground source={require('../../images/girisekrani.jpg')} style={{height:'100%'}}>
                <ScrollView style={{height:'40%',marginTop:'80%'}}>
                     
                    <View >

                        <Input
                            inputPlaceHolder="E-mail"   
                            placeholderTextColor='#ddd' 
                            value={this.props.email}
                           // onChangeText={this.onEmailChanged.bind(this)}                
                            source={require('../../images/4.png')}     
                        
                        />
                    </View>

                    <View>
                        <GirisButton
                            text='Şifre Sıfırla'
                        />
                    </View>
                    <View style={styles.warnTextWrapper}>
                        <Text style={styles.warnTextStyle}>Kayıtlı e-mail adresinize şifre sıfırlama maili gönderilecektir...</Text>
                    </View> 

                </ScrollView>
            </ImageBackground>
        )
    }

}

styles=StyleSheet.create({


    warnTextWrapper:{
        marginTop: 10,
        alignSelf: 'center',
        width: 300,
        borderRadius:10,
        paddingLeft:20,
        backgroundColor:'#000',
        opacity:0.7,
        height:35

    },
    warnTextStyle:{
        color:'white'
    }
})




const mapStateToProps = state => {
    const {email,loading,error} = state.auth;
    return{
        email,loading,error
    }
}

export default connect(mapStateToProps,{forgetPassword,emailChanged})(ForgetPassword);
