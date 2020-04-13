import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {Image, StyleSheet,TouchableOpacity } from 'react-native';
import Login from './components/AuthenticationPages/Login';
import SignUp from './components/AuthenticationPages/SignUp'
import ForgetPassword from './components/AuthenticationPages/ForgetPassword';
import MainPage from './components/MainPages/MainPage';
import PostingPage from './components/MainPages/PostingPage'

const RouterComp = () => {
    return (

        <Router>

            <Scene key='root' hideNavBar={true}>

                <Scene key='auth'>

                    <Scene key='login'
                    initial
                        component={Login}
                        title='login'
                        hideNavBar={true}
                         />

                    <Scene key='signup'
                        component={SignUp}
                        title='Sign Up'
                        hideNavBar={true}
                         />
                    <Scene key='forget'
                        component={ForgetPassword}
                        title='Forget Password'
                        hideNavBar={true}
                         />

                </Scene>

                <Scene key='mainpages' initial>
                     <Scene key='main'
                            navigationBarStyle={
                                {
                                    backgroundColor:'#f1f1f1',
                                    height: 80
                                }
                            }
                        component={MainPage}
                        title='anasayfa'
                        initial
                        renderRightButton={renderMainPageRight}
                        renderLeftButton={renderMainPageLeft}
                        hideNavBar={false}

                         />

                    <Scene key='posting'
                    component={PostingPage}
                    title='İlan Ver Sayfası'

                    />

                </Scene>





            </Scene>

        </Router>

    )
}


const styles = StyleSheet.create({

    navbar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red', // changing navbar color
    }


})

const renderMainPageRight = () => {
    return(
        <TouchableOpacity >
            <Image  source={require('../src/images/menu.png')}/>
        </TouchableOpacity>
    )
}

const renderMainPageLeft = () => {
    return(
        <TouchableOpacity >
            <Image  source={require('../src/images/profile.png')}/>
        </TouchableOpacity>
    )
}



export default RouterComp;
