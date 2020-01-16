import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


class Event extends Component {
render(){
    return(
        <View style = {{flex:1, width: 100 + "%", backgroundColor:'black'}}> 
            
           
            <View style = {styles.userBar}> 

                <TouchableOpacity>  
                <Image style = {styles.organizationPic} 
                source = {{uri: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/alpha-chi-omega-a-chi-o-rainbow-sticker-32320-300x300.png"}}/>
                </TouchableOpacity>
                
                <Text style = {styles.organizationName}> AXO </Text>
                <Text style = {styles.organizationHandle}> @usdaxo</Text>
                <Text style = {styles.activity}> · 3 hours ago </Text>

                
                <Text style = {styles.eventDescription}> AXO 2nd Annual Vollyball Tournament </Text>

                <Text style = {styles.date}> Wednesday pm @ JCP Rec Center</Text>
                  
                        
                    <Icon style = {styles.likeIcon} name = "thumbs-o-up" size={18} />
                
                    <Icon style = {styles.dislikeIcon} name = "thumbs-o-down" size={18} />

                   
                    <Icon style = {styles.commentIcon} name = "comment-o" size={18} />

                    

            </View>

        </View>
    )
}

}
export default Event; 

const styles = StyleSheet.create({


    activity:
    {   
        top:20,
        marginLeft: 20,
        color: 'gray',
        fontSize: 14,
        fontWeight:'200'
    },

    commentIcon:{
        
        position: 'absolute',
        left: 80,
        top: 100,
        color: 'gray',
        
    },
    
   
    date:{
      position: 'absolute',
        left: 75,
        top: 70,
        color: 'gray',
        fontSize: 14,
        fontWeight:'200'  
    },
     

    dislikeIcon:
    {
        
        position: 'absolute',
        left: 250,
        top: 100,
        color: 'gray',
        
    },
    
    eventDescription:
    {
      position: 'absolute',
        left: 75,
        top: 45,
        color: 'white',
        fontSize: 16,
        fontWeight:'300'  
    },

    likeIcon:{
        position: 'absolute',
        left: 160,
        top: 100,
        color: 'gray',
        
    },

    organizationHandle:
    {
       
        top:20,
        color: 'gray',
        fontSize: 16,
        fontWeight:'200',
        color: 'dodgerblue'
    },

     organizationPic: {
        height: 50,
        width: 50,
        borderRadius: 25,
        top: 20,
        left: 20,
        borderWidth: 1,
        borderColor: 'white'
       
        
    },

    organizationName:
    {
        marginLeft: 25,
        top: 20,
        color: 'white',
        fontSize: 16,
        fontWeight:'400'
    },

    
    

      userBar: {
        width: 100 + "%",
        height: 120,
        backgroundColor: 'black',
        flexDirection: "row",
        borderColor: "gray",
        
        },

        userHandle: {
            position: 'absolute',
            left: 160,
            top: 40,
            color: 'dodgerblue',
            fontSize: 16,
            fontWeight:'300'
        }


});
