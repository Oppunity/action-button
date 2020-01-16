import React, {Component} from 'react';  
import Icon from 'react-native-vector-icons/Octicons'; 
import  { CommentFeed }   from './index';


 export default class Mentions extends Component{
  render(){
      return(
          
          <CommentFeed/>
         
      );
  }
 }

Mentions.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon  
            name={'mention'}  
            color={tintColor}  
            size={25}  
        />  
        )  
    }  



