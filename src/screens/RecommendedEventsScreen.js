import React, {Component} from 'react';  
import {View,Text, StyleSheet} from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome5';
import  { RecommendedEventsFeed }  from './index';
  

 class RecommendedEventsScreen extends Component{  
    render() {  
        return(  
            <RecommendedEventsFeed/>
        );  
    }  
}  
RecommendedEventsScreen.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={'calendar-check'}  
                color={tintColor}  
                size={25}  
            />  
        )  
}  

export default RecommendedEventsScreen;

