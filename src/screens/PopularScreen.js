import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/SimpleLineIcons';  
import  { PopularFeed }  from './index';


 class PopularScreen extends Component{  
    render() {  
        return(  
            <View>  
                <PopularFeed/>
            </View>  
        )  
    }  
}  
PopularScreen.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={'fire'}  
                color={tintColor}  
                size={25}  
            />  
        )  
}  

export default PopularScreen;