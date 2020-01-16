import React, {Component} from 'react';  
import {StyleSheet, Text, View,StatusBar} from 'react-native';  
import {createAppContainer} from 'react-navigation';   
import Icon from 'react-native-vector-icons/Ionicons';  

import AppNavigator from '../../App';


  
class NotificationsPage extends Component{  
   

    render(){  
        return(  
            
                <View style = {{flex:1, width: 100 + "%", height: 100 + "%", backgroundColor:'black'}}>

                <View style = {styles.tempNav}> 
                    <Text style = {styles.headerText}> Notifications</Text>
                </View>   
                   
                
             
                
            </View>  
        );
    }  
}  

export default NotificationsPage;

const styles = StyleSheet.create({  
   
   
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor: 'black',  
        paddingHorizontal: 18,  
        paddingTop: 5,  
    },

     headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },


     tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101011',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

   
 wrapper: {  
        flex: 1,  
    },  
  
});
  
 