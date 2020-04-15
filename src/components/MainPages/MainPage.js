import React, { Component } from 'react';
import { View,Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {getUser} from '../../actions/authActions';
import { ScrollView, TouchableOpacity,  } from 'react-native-gesture-handler';

import { MenuButton } from '../../common';
import axios from 'axios'
import SaleCard from '../SaleCard';

//knka bi d

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token : '',
      user:{
        nameSurname: ''
      },
      sales: []
    }
  }

  



  componentDidMount(){
    this.getActiveSales();
    AsyncStorage.getItem('token').then(token => {
      AsyncStorage.getItem('user').then(user => {
        if(!user) {
          var userObject = JSON.parse(user);
          this.setState({ user: userObject });
        }
        else{
          getUser(token).then(user => this.setState({ user })); //
        }
      });
    });
  }

  getActiveSales = () => {
    const url = 'https://ikincilt-temp-api.herokuapp.com/sales';
    axios.get(url).then((response) => {
        const { sales } = response.data;
        this.setState({
            sales: sales
        });
    }).catch((error) => {
        console.log(error);
    });
  }


  render() {
    const { sales } = this.state;
    const bookCards = sales.map(sale => {
        if(sale.imageUrls.length === 0) this.getActiveSales();
      
        return (


              <SaleCard sale={sale} />

        )

    });

    return(

     <View style={{flex:4.1}}>
       <View style={{marginTop:5,marginBottom:5,flexDirection:'row',flex:0.1}}>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>

       </View>

       <ScrollView style={{backgroundColor:'#f1f1f1',flex:3.6}}>

       <View style={{ marginTop:30,
                      justifyContent:'center',
                      flexDirection:'row',
                      flexWrap: 'wrap'
                    }}>
       {bookCards}

       </View>

       </ScrollView>

       <View style={{backgroundColor:'#bfbfbf',justifyContent:'center',alignItems:'center',flex:0.3}}>
          <MenuButton
          source={require('../../images/photo.png')}
          />

          <Text>İlan Ver</Text>
                  
       </View>
       <View style={{justifyContent:'flex-end',alignItems:'flex-start',flex:0.1}}>

          <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:'10%'}}>
              <MenuButton
              source={require('../../images/home.png')}
             />
            </View>

            <View style={{marginLeft:'10%'}}>
              <MenuButton
              source={require('../../images/chat.png')}
             />
            </View>
            <View style={{marginLeft:'10%'}}>
              <MenuButton
              source={require('../../images/ring.png')}
             />
            </View>
            <View style={{marginLeft:'10%'}}>
              <MenuButton
              source={require('../../images/posts.png')}
             />
            </View>





          </View>

       </View>

     </View>

    )

  }
 }

export default MainPage;

