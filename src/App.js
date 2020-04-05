import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './router';
import reducers from './reducers'

class App extends Component {
   
  render() {

    const store= createStore(reducers,{},applyMiddleware(ReduxThunk))

    return (

      <Provider store={store}>
            
        <Router/>

      </Provider>

    );
  }
}


export default App;





/*
bir önceki projedeki style
const styles = StyleSheet.create({

  appContainer: {

    flex: 1,
  },
  buttonTextStyle: {
    borderWidth: 1,
    padding: 25,
    backgroundColor: '#ddbb00',
    borderRadius: 100,
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },

})*/