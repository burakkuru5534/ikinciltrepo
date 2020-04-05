
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED='password_changed';
export const LOGIN_USER_FAILED='login_user_failed';
export const LOGIN = 'login';
export const LOGIN_USER_SUCCESS='login_user_success';
export const SIGNUP = 'signup';
export const FORGETPASSWORD='forget_password';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';




export const getUser = (token) => {

    //  AsyncStorage.setItem('token').then(token => this.setState({ token }));
  
  
        const url = 'https://ikincilt-temp-api.herokuapp.com/user/get';
      return axios.post(url, {}, {
          headers:{
              authorization: token
          }})
          .then(async (response) => {
              const { user } = response.data;
  
              await AsyncStorage.setItem('user', JSON.stringify(user)); 
              return user;
          })
          .catch(error => {
              console.log(error);
              //logout();
          });
  };
  
  
  
  export const verifyUserByToken = token => {
      const url = apiConfig.serverUrl + '/verify';
      return axios.put(url, {},{
          headers:{
              authorization: token
          }
      }).then(response => response)
          .catch(error => error);
  }

  export const emailChanged =(text)=>{
    return {
        type:EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged =(password)=>{
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
}

const loginSuccess = async (dispatch,response) =>{
    console.log('basarısız giriste login success fonk giriyor mu? Evet. Token: '+token)
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:token
    })
    const token  = response.data.token;
    await AsyncStorage.setItem('token', token);
    Actions.main();
}

const loginFailed = (dispatch) =>{
    console.log('fail fonksiyonuna girdi')
    dispatch({
        type:LOGIN_USER_FAILED,
        
    })

}


export const loginUser = (email,password) =>{
    return (dispatch) =>{
        dispatch({
            type: LOGIN
        });
        console.log('type login girildi')   
  
          const apiConfig = require('../components/AuthenticationPages/apiConfig');
          const url = apiConfig.serverUrl + '/user/authenticate';
  
          //console.log(this.props.email);
          axios.post(url, {
              email: email,
              password: password
          }).then( async (response) =>loginSuccess(dispatch,response))  
            .catch(()=>loginFailed(dispatch))            
             
    }
}

const signSuccess = async (dispatch,response) =>{
    console.log('basarısız giriste sign success fonk giriyor mu? Evet. Token: '+token)
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:token
    })
    const token  = response.data.token;
    await AsyncStorage.setItem('token', token);
    Actions.login();
}

const signFailed = (dispatch) =>{
    console.log('fail fonksiyonuna girdi')
    dispatch({
        type:LOGIN_USER_FAILED,
        
    })

}

export const signUser = () =>{
    return (dispatch) =>{
        dispatch({
            type: SIGNUP
        });
        Actions.signup();


    }
}

export const forgetPassword = () => {
    return (dispatch) =>{
        dispatch({
            type: FORGETPASSWORD
        });
        Actions.forget();


    }
}


/*
export const login = ({ token }) => {
    cookie.set('token', token, { expires: 7 })
    getUser(token);

};

export const auth = (ctx, redirect) => {
    
    let params = redirect ? ('?redirect=' + redirect) : '';
    let location = '/giris-yap' + params;
    if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
        return
    }
    

    if (!token) {
        Router.push('/giris-yap')
    }

    return token
};

export const guest = ctx => {

    if (ctx.req && token) {
        ctx.res.writeHead(302, { Location: '/anasayfa' });
        ctx.res.end();
        return
    }

    if (token) {
        Router.push('/anasayfa');
    }

    return;
};

export const getToken = ctx => {


    return token
};





export const logout = () => {
    cookie.remove('token')
    cookie.remove('user')
    cookie.remove('userNameSurname')
    // to support logging out from all windows
    //window.localStorage.setItem('logout', Date.now())
    Router.push('/giris-yap')
};

*/

































/*export const EMAIL_CHANGED = 'email_changed'
export const PASSWORD_CHANGED='password_changed'
export const LOGIN_USER_SUCCESS='login_user_success'
export const LOGIN='login'
export const LOGIN_USER_FAILED='login_user_failed'
import firebase from '../firebase'
import {Actions} from 'react-native-router-flux';
export const emailChanged =(text)=>{
    return {
        type:EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged =(password)=>{
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
}

export const loginUser = (email,password) =>{
    return (dispatch) =>{
        dispatch({
            type: LOGIN
        });

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user=>loginSuccess(dispatch,user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user => loginSuccess(dispatch,user))
            .catch(() => loginFailed(dispatch));
        });
    }
}


const loginSuccess = (dispatch,user) =>{
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    })
    Actions.main();
}

const loginFailed = (dispatch) =>{
    dispatch({
        type:LOGIN_USER_FAILED,
        
    })
}*/
