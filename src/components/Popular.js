import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class Popular extends Component{
    render(){

         activity = '· 5 hours ago';
         organizationName = 'Alpha Chi Omega';
         interactions = '12,856 Interactions';

        return(
                  <View style = {{flex:1, width: 100 + "%", backgroundColor:'black'}}> 
            
           
            <View style = {styles.eventContainer}> 
                

               
               <View style = {styles.textContainer}> 
                
                <View style = {styles.trendingContainer}> 

                <Text style = {styles.trending} >Trending on campus </Text> 
                <Text style = {styles.activity}> {activity} </Text>
                </View>

                <View style = {styles.nameContainer}>
                <TouchableOpacity>
                <Text style = {styles.organizationName}> {organizationName} </Text>
                </TouchableOpacity>
                
                </View>

               <View style = {styles.interactionContainer}>
               <TouchableOpacity>
               <Text style = {styles.interactions}> {interactions} </Text>
               </TouchableOpacity>
               </View>
               </View>

               
                    

            </View>

        </View>
    )
}

}
export default Popular; 

const styles = StyleSheet.create({


    activity:
    {   
        color: 'white',
        fontSize: 14,
        fontWeight:'300'
    },

    
    container:{
        height: 100 + '%',
        width: 100 + '%'
    },
    
   
    date:{
      position: 'absolute',
        left: 75,
        top: 70,
        color: 'white',
        fontSize: 14,
        fontWeight:'200'  
    },
     

    
     eventContainer: {
        width: 100 + "%",
        height: 130,
        backgroundColor: 'black',
        flexDirection: "row",
        borderBottomWidth: 0.4,
        borderColor: 'gray'
        
        },


    eventDescription: {
      position: 'absolute',
        left: 10,
        top: 70,
        color: 'white',
        fontSize: 16,
        fontWeight:'300',
        
    },

    
    interactionContainer: {
        position: 'absolute',
        top: 75,
        height: 40,
        width: 350,
        left: 10,
        flexDirection:'row',
        
        },

        interactions: {
            fontSize: 16,
            color: 'cyan',
            fontWeight: 'bold',
            
        },

    nameContainer: {
        position: 'absolute',
        top: 40,
        height: 40,
        width: 300,
        flexDirection:'row'
    },

    organizationHandle:
    {
     
        fontSize: 16,
        fontWeight:'200',
        color: 'cyan',
        left: 20
    },


    organizationName:
    {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold',
        left: 10
        
    },

    textContainer:{
      
        position: 'absolute',
        height: 95 + '%',
        width: 100 + '%',
        marginTop: 5,
              
    },
     
    trending: {
        
        color: 'white',
        fontSize: 14,
        fontWeight:'300'
    },

     trendingContainer: {
        position: 'absolute',
        top: 20,
        height: 30,
        width: 250,
        flexDirection:'row',
        left: 10
        
        },

     
       

});
