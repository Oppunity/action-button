import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome5';  
import  { SportsFeed }  from './index';

 class SportsScreen extends Component{  
    render() {  
        return(  
            <SportsFeed/>
        )  
    }  
}  
SportsScreen.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={'basketball-ball'}  
                color={tintColor}  
                size={25}  
            />  
        )  
}  

export default SportsScreen;