import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// Import screens
import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipesDetails from './components/RecipesDetails';



const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ()=>({
        header:null,
        headerBackTitle: null,
      })
    },
    Recipes: {
      screen: Recipes,
      navigationOptions: () => ({
        header: null
      })
    },
    RecipesDetails:{
      screen: RecipesDetails,
      navigationOptions: ()=>({
        header:null
      })
    },
  },
  {
    initialRouteName: 'Home',
  }
  );
  
  var Navigator = createAppContainer(AppNavigator);
    
  
  export default class App extends React.Component {
      render(){
        return (
    
            <Navigator/>
        );
      }
    }
