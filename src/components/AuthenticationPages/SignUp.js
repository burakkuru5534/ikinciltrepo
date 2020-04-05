
import React,{Component} from 'react';
import {View,ScrollView, ImageBackground,StyleSheet} from 'react-native';
import  {SignUser, emailChanged,passwordChanged} from '../../actions';
import {connect} from 'react-redux'
import { Input, GirisButton } from '../../common';
//const validator = require('./Validations');

 class SignUp extends Component{

   

    render(){
        

        return(
                <ImageBackground source={require('../../images/girisekrani.jpg')} style={{height:'100%' }}>
                
                    <ScrollView style={{height:'40%',marginTop:'80%'}}>
                        <View>              
                            <Input               
                                inputPlaceHolder="Tam isim"   
                                placeholderTextColor='#ddd' 
                                value={this.props.email}
                              //  onChangeText={this.onEmailChanged.bind(this)}                
                                source={require('../../images/4.png')}               
                            />
                        </View>
                        <View>              
                            <Input               
                                inputPlaceHolder="E-mail"   
                                placeholderTextColor='#ddd' 
                                value={this.props.email}
                              //  onChangeText={this.onEmailChanged.bind(this)}                
                                source={require('../../images/4.png')}               
                            />
                        </View>


                        <View style={{marginTop:20}}>
                            <Input
                                value={this.props.password}
                              //  onChangeText={this.onPasswordChanged.bind(this)}
                                secureTextEntry 
                                source={require('../../images/3.png')}
                                inputPlaceHolder="Şifre"
                                placeholderTextColor='#ddd'                 
                            />
                        </View>
                        <View style={{marginTop:20}}>
                            <Input
                                value={this.props.password}
                              //  onChangeText={this.onPasswordChanged.bind(this)}
                                secureTextEntry 
                                source={require('../../images/3.png')}
                                inputPlaceHolder="Şifre doğrula"
                                placeholderTextColor='#ddd'                 
                            />
                        </View>

                       

                        <View>
                            <GirisButton
                              
                                text='Kayıt Ol'
                            />
                        </View>                        

                    </ScrollView>               

            </ImageBackground>
        
        )
    }

}
const styles=StyleSheet.create({

    errorStyle: {
        fontSize: 20,
        color: 'red',
        paddingTop: 5,
        alignSelf: 'center'
    },
})



const mapStateToProps = state => {
    const {token,email,password,loading,error} = state.auth;
    return{
        token,email,password,loading,error
    }
}

export default connect(mapStateToProps,{SignUser,emailChanged,passwordChanged})(SignUp);


