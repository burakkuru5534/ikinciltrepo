
import React,{Component} from 'react';
import {View,Text,ScrollView, ImageBackground,StyleSheet} from 'react-native';
import  {forgetPassword,signUser,loginUser, emailChanged,passwordChanged} from '../../actions';
import {connect} from 'react-redux'
import { Input, GirisButton } from '../../common';
const validator = require('./Validations');
import { AltButton } from '../../common/AltButton';

 class Login extends Component{

    constructor(props) {
        super(props);
        const { registered, verificationToken } = this.props;
       // var message = '';
      //  var color = '';
        var email = '';
      //  var emailVerified = false;
      //  var verificationFailed = false;

        if(registered){
            email = registered;
         //   message = 'Doğrulama emaili gönderdik, lütfen email adresinizi kontrol edin!';
          //  color = 'success';
        }
        this.state = {
           
            email:'',
            password: '',
            user:{}
        }

      //  this.handleInputChange      = this.handleInputChange.bind(this);
        this.handleLogin            = this.handleLogin.bind(this);
        this.handleSign             = this.handleSign.bind(this);
        this.handleForget           = this.handleForget.bind(this);
      //  this.handlePasswordEnter    = this.handlePasswordEnter.bind(this);
      //  this.handleEmailEnter       = this.handleEmailEnter.bind(this);
    }

    onEmailChanged(text){
        this.props.emailChanged(text);

    }

    onPasswordChanged(text){
        this.props.passwordChanged(text);

    }

   
    

    handleLogin(){
        if(!this.validate()){
              console.log('fail')
                       
          }

        const {email,password}=this.props;
        this.props.loginUser(email,password);

       
    }

   

    validate() {
        if (!validator.isEmail(this.props.email)){
            this.setState({
                alert: {
                    message: 'Geçerli bir email adresi girmediniz.',
                    color: 'danger'
                }
            });
            return false;
        }else if (this.props.password.length === 0){
            this.setState({
                alert: {
                    message: 'Şifrenizi girmediniz.',
                    color: 'danger'
                }
            });
            return false;
        }else return true
    }

    handleSign(){
        this.props.signUser();
    }
    
    handleForget(){
        this.props.forgetPassword();
    }

    render(){
        const { error, loading } = this.props
        const errorMsg = error ? (
            <Text style={styles.errorStyle}>

                {error}

            </Text>

        ) :
            null;

        return(
                <ImageBackground source={require('../../images/girisekrani.jpg')} style={{height:'100%' }}>
                
                    <ScrollView style={{height:'40%',marginTop:'80%'}}>
                        <View>              
                            <Input               
                                inputPlaceHolder="E-mail"   
                                placeholderTextColor='#ddd' 
                                value={this.props.email}
                                onChangeText={this.onEmailChanged.bind(this)}                
                                source={require('../../images/4.png')}               
                            />
                        </View>

                        <View style={{marginTop:20}}>
                            <Input
                                value={this.props.password}
                                onChangeText={this.onPasswordChanged.bind(this)}
                                secureTextEntry 
                                source={require('../../images/3.png')}
                                inputPlaceHolder="Şifre"
                                placeholderTextColor='#ddd'                 
                            />
                        </View>

                        {errorMsg}

                        <View>
                            <GirisButton
                                onPress={this.handleLogin}
                                text='Giriş'
                                spinner={loading}
                            />
                        </View>

                        <View style={{flexDirection:'row'}}>
                            
                            <View style={{paddingLeft:20,paddingRight:45}}>
                                <AltButton
                                    text='Kayıt Ol'
                                    onPress={this.handleSign}
                                />
                            </View>
                        
                            <View>
                            <AltButton
                            text='Şifremi Unuttum'
                            onPress={this.handleForget}

                            />
                            </View>
                                                    
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

export default connect(mapStateToProps,{forgetPassword,signUser,loginUser,emailChanged,passwordChanged})(Login);









/*    handleLogin(){

     //   const {email,password}=this.props;
     //   this.props.loginUser(email,password);

        if(!this.validate()){
          //  console.log('fail')
                     
        }

        const apiConfig = require('./apiConfig');
        const url = apiConfig.serverUrl + '/user/authenticate';

        //console.log(this.props.email);
        axios.post(url, {
            email: this.props.email,
            password: this.props.password
        }).then( async (response) =>  {   
                     
                const token  = response.data.token;
                await AsyncStorage.setItem('token', token);
                if(token){
                    Actions.main();
                }
              
            });
    }*/






/*
    componentDidMount(){
        
        const {verificationToken} = this.props;
        if(verificationToken){
            verifyUserByToken(verificationToken).then(response => {
                if(response && response.data){
                    this.setState({
                        alert: {
                            message:  'Email adresiniz başarıyle doğrulanmıştır!',
                            color: 'success'
                        }
                    })
                }else{
                    this.setState({
                        alert: {
                            message: 'Email doğrulama işleminde bir hata oluştu.',
                            color: 'danger' 
                        }
                    });
                    
                }
            });
        }
        
    }














    Login.getInitialProps = async function(context) {
    guest(context);
    const { registered, redirect, verificationToken } = context.query;
    return { registered, redirect, verificationToken };
};
    */

      
               //await async fonksiyon dısında kullanılamaz diyor. handleLogin'i async yaptım. yine aynı. 
               /* 

               handlelogin kodlar
                const { redirect } = this.props;
                let redirectPage = '/anasayfa';
                if(redirect){
                    let redirectList = redirect.split(',');
                    redirectPage = '/' + redirectList.join('/');
                    console.log(redirectPage)
                }*/
                
              //  login({ token, });
           /*   getUser(token)
              .then(response => {
                  this.setState({
                      user:response

                  })})
                             
            })
            .catch(error => {
                console.log(error)*/
              /*  if (error.response){
                    let message = error.response.data.message;
                    this.setState({
                        alert: {
                            message: message,
                            color: 'danger'
                        },
                        password: ''
                    });
                }else{
                    this.setState({
                        alert: {
                            message: 'Sunucudaki bir sorundan dolayı kayıt işleminizi şu anda gerçekleştiremiyoruz.',
                            color: 'info'
                        }
                    });
                }*/

                /*
                
                handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleEmailEnter(event) {
        if (event.key === 'Enter') {
            document.getElementById('password').focus();
        }
    }
    handlePasswordEnter(event) {
        if (event.key === 'Enter') {
            this.handleLogin();
        }
    }
                
                */