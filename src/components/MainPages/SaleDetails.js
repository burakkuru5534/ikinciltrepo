import React,{ Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux'


class SaleDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            sales: [],
            _id:'',

        }
        

    }

    // TODO : id ye göre sale seçip onacard içine gönder onu detail içinde döndür
   

    getSale(){

        console.log('- SaleDetails.js - getDetailsda getSale girdi');
        const {_id} = this.props;
        console.log('- SaleDetails.js - this.props _id:',_id)

        const url = 'https://ikincilt-temp-api.herokuapp.com/sales'+_id;
        console.log('- SaleDetails.js - url:',url)

        axios.get(url).then((response) => {
            const { sales } = response.data;
            this.setState({
                sales: sales
            });
        }).catch((error) => {
            console.log(error);
        });
        
   /*     const url = 'https://ikincilt-temp-api.herokuapp.com/sale/'+_id;
        axios.get(url)
        .then((response) => {
            let { sale } = response.data;
            this.setState({
                sale
            });
            setTimeout(() => {
                checkIfTalkExists(sale._id, sale.owner._id, token).then(response => {
                    this.setState({
                        talkExists: response,
                        checkingTalkExistence: false
                    });
                });
            }, 1000);
        }).catch((error) => {
            console.log(error);
        })*/
    }

    render(){
        const { sales} = this.state;
        console.log('- SaleDetails.js - sale:',sales);

        const oneBook = sales.map(sale => {
            console.log('- SaleDetails.js - sale:',sales);
            
            this.getSale();
            console.log('- SaleDetails.js - sale:',sales);

          
            return (
              
    
                  <OneCard _id={_id} />
    
            )
           
        });
    
        return(
            <View>
                <ScrollView style={{backgroundColor:'#bfbfbf',flex:3.6}}>

                    <View style={{ marginTop:30,
                                justifyContent:'center',
                                flexDirection:'row', 
                                flexWrap: 'wrap'
                                }}>

                        {oneBook}

                    </View>

                </ScrollView>
            </View>
        )
    }
}



const mapStateToProps = state => {
    const {_id} = state.main;
    return{
        _id
    }
}

export default connect(mapStateToProps)(SaleDetails);