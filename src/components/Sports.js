import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class Sports extends Component{
    render(){

         activity = '· 2 hours ago';
         organizationName = 'USD Softball';
         interactions = '1,856 Interactions';

        return(
                  <View style = {{flex:1, width: 100 + "%", backgroundColor:'black'}}> 
            
           
            <View style = {styles.eventContainer}> 
                

                <ImageBackground
                style = {styles.container}
                source={{uri: 'https://i.ytimg.com/vi/xfKbP6sqt9k/maxresdefault.jpg'}}/>

               <View style = {styles.textContainer}> 
                
                <View style = {styles.trendingContainer}> 

                <Text style = {styles.trending} >Trending on campus </Text> 
                <Text style = {styles.activity}> {activity} </Text>
                </View>

                <View style = {styles.nameContainer}>
                <Text style = {styles.organizationName}> {organizationName} </Text>
                
                </View>

               <View style = {styles.interactionContainer}>
               <Text style = {styles.interactions}> {interactions} </Text>
               </View>
               </View>

               
                    

            </View>

        </View>
    )
}

}
export default Sports; 

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
        width: 150,
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
       backgroundColor: 'black',
       opacity: 0.72,
       
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
