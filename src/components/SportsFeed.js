import React, { Component, Fragment  } from "react";
import { Text, FlatList, StyleSheet, View, ImageBackground, TouchableOpacity} from "react-native";
import { Sports } from '../screens/index';


class SportsFeed extends Component {
    _renderSports({ item }) {
       return <Sports item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        eventType = 'USD Basketball';
        uploadDate = '· 3 hours ago';
        event =  'Toreros versus SDSU ';
        interactions = '5,834 Interactions';

        return (

       
       <Fragment>
    
       <View style = {styles.topEvent}> 
      <ImageBackground
        style = {styles.container}
        source={{uri: 'https://usdtoreros.com/images/2018/11/22/Massalski_1.jpg?width=1920&quality=80&format=jpg'}}/>
    
        <View style = {styles.eventContainer}> 
         </View>
        <TouchableOpacity> 
        <Text style = {styles.eventType}> {eventType}  </Text>
        </TouchableOpacity>
        
        <Text style = {styles.uploadDate}> {uploadDate} </Text>
        
        </View>
        <View style = {styles.nameContainer}> 
        <TouchableOpacity> 
        <Text style = {styles.event}> {event} </Text>
        </TouchableOpacity>

   <View style = {styles.interactionContainer}>
               <TouchableOpacity> 
               <Text style = {styles.interactions}> {interactions} </Text>
               </TouchableOpacity>
               </View>
       
     
        
        </View>

        <View style = {styles.flatList}> 
        <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor={this._returnKey}
            renderItem={this._renderSports}
             />
        </View>
       
       </Fragment>


        );        
    }
}


export default SportsFeed;

const styles =  StyleSheet.create({
    container:{
        height: 100 + '%',
        width: 100 + '%'
    },
    
    event: {
         color: 'white',
        fontSize: 28,
        fontWeight: '900',
        fontFamily: 'Avenir-Roman',
        position: 'absolute',
        lineHeight: 30,
        left: 10
    },

    eventType: {
        color: 'white',
        fontSize: 24,
        fontWeight: '900',
        fontFamily: 'Avenir-Roman',
        position: 'absolute',
        top: 50,
        left: 10
    },

    eventContainer:{
      
        position: 'absolute',
        height: 95 + '%',
        width: 100 + '%',
       backgroundColor: 'black',
       top: 5,
       opacity: 0.5,
       
       
    },

    eventDescription: {
       fontWeight: 'bold',
        fontFamily: 'Avenir-Roman',
        position: 'absolute',
        top: 40,
        left: 10
    }, 
    

    flatList: {
        
        borderColor: 'white'
    },

    interactions: {
            fontSize: 22,
            color: 'cyan',
            fontWeight: 'bold',
            
        },

    interactionContainer: {
        position: 'absolute',
        top: 40,
        height: 40,
        width: 350,
        left: 10,
        flexDirection:'row',
        
        },

    
    nameContainer:{
       height: 100,
        width: 300,
        position: 'absolute',
        top: 100,
        left: 10
    },

    topEvent:{
        
        borderColor: 'white',
        height: 200,
        width: 100 + '%',
               
    },

    uploadDate: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Avenir-Roman',
        position: 'absolute',
        top: 50,
        left: 200
        
    }

})