import React,{ Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux'
import OneCard from '../OneCard';

class SaleDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            sale: {},
            _id:'',

        }


    }

    componentDidMount() {
        this.getSale();
    }

    // TODO : id ye göre sale seçip onacard içine gönder onu detail içinde döndür


    getSale(){

        console.log('- SaleDetails.js - getDetailsda getSale girdi');
        const {_id} = this.props;
        console.log('- SaleDetails.js - this.props _id:',_id)

        const url = 'https://ikincilt-temp-api.herokuapp.com/sale/' + _id;
        console.log('- SaleDetails.js - url:',url)

        axios.get(url).then( response => {
            const { sale } = response.data;
            this.setState({
                sale
            });
            this.props.navigation.setParams({
                title: sale.title,
                backTitle: 'Anasayfa'
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
        const { sale } = this.state;
        console.log(sale.imageUrls)
        return(
            <ScrollView style={{backgroundColor: '#f1f1f1'}}>


                    <View style={{
                                flexDirection:'column',
                                flexWrap: 'wrap'
                                }}>

                        {sale.title &&
                            <>
                                <View style={{height: 300, width: '100%'}}>
                                    <Image source={{uri: sale.imageUrls[0] }}
                                           style={{width: '100%', height: '100%'}} />
                                </View>

                                <View style={{
                                    marginTop:15,
                                    paddingLeft: '3%',
                                    flexWrap: 'wrap',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        flex:8,
                                        textAlign: 'left',
                                        fontSize: 17,
                                        fontFamily: 'Helvetica',
                                        fontWeight: 'bold'
                                    }}>
                                        {sale.title}
                                    </Text>
                                    <Text style={{ flex:2, textAlign: 'center', fontSize: 17, fontFamily: 'Verdana' }}>
                                        {sale.firstPrice} TL
                                    </Text>
                                </View>
                                <View style={{
                                    marginTop:2,
                                    paddingLeft: '3%',
                                    flexWrap: 'wrap',
                                    flexDirection: 'column'
                                }}>
                                    <Text style={{
                                        flex:1,
                                        textAlign: 'left',
                                        fontSize: 17,
                                        fontFamily: 'Helvetica',
                                        color: '#333333'
                                    }}>
                                        {sale.author}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: '#999999',
                                        borderBottomWidth: 1,
                                        margin: 10
                                    }}
                                />
                                <View style={{
                                    marginTop:10,
                                    paddingLeft: '3%',
                                    marginLeft: '3%',
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    borderLeftColor: '#555555',
                                    borderLeftWidth: 4,
                                }}>
                                    <Text style={{
                                        flex:1,
                                        textAlign: 'left',
                                        fontSize: 17,
                                        fontFamily: 'Georgia'
                                    }}>
                                        "{sale.description}"
                                    </Text>
                                </View>
                            </>
                        }



                    </View>

            </ScrollView>

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
