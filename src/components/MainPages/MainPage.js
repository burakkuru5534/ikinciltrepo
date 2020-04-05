import React, { Component } from 'react';
import { View,Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {getUser} from '../../actions/authActions'; 
import { ScrollView,  } from 'react-native-gesture-handler';
import { MenuButton } from '../../common';
import axios from 'axios'
import {SaleCard} from '../SaleCard';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token : '',
      user:{
        nameSurname: '' //başta böyle bi şey yapıyorum ki user get edilmeden önce 'nameSurname of undefined' hatası vermesin
      },
      sales: []
    } 
  }// yazı ??  geliyor knka ama salecard boş :D postingpageye copyala ben ordan oraya geçirim istersen :D sonra bi kapayıp açarız vs livei okey 

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
    const { user, sales } = this.state;
    const bookCards = sales.map(sale => {
        if(sale.imageUrls.length === 0) this.getActiveSales();
        return <SaleCard sale={sale} />
    });

    return(

     <View style={{flex:4.1}}>
       <View style={{flexDirection:'row',backgroundColor:'#bfbfbf',flex:0.1}}>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         <MenuButton source={require('../../images/menu.png')}/>
         
       </View>

       <ScrollView style={{backgroundColor:'#bfbfbf',flex:3.6}}>

       <View style={{ paddingLeft:'5%',
                      paddingRight: '5%',
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
          <Text>İlan Ver {user.nameSurname}</Text>
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