import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


class Comment extends Component {
render(){
    return(
        <View style = {{flex:1, width: 100 + "%", backgroundColor:'black'}}> 
            
           
            <View style = {styles.userBar}> 

                <TouchableOpacity>  
                <Image style = {styles.commenterPic} 
                source = {{uri: "https://i.pinimg.com/736x/da/72/fb/da72fb763edf1974e30cef0bfc218255.jpg"}}/>
                </TouchableOpacity>
                
                <Text style = {styles.commenterName}> Mckenzie  </Text>
                <Text style = {styles.commenterHandle}> @its_mckenzie</Text>
                <Text style = {styles.date}> · 6 hours ago </Text>

                <Text style = {styles.replying}>Replying to </Text>
                <Text style = {styles.userHandle}>@kingg_dayydayy</Text>
                <Text style = {styles.reply}> Are you going to the tournament tonight?</Text>


                  
                        
                    <Icon style = {styles.likeIcon} name = "thumbs-o-up" size={18} />
                
                    <Icon style = {styles.dislikeIcon} name = "thumbs-o-down" size={18} />

                   
                    <Icon style = {styles.commentIcon} name = "comment-o" size={18} />

                    

            </View>

        </View>
    )
}

}
export default Comment; 

const styles = StyleSheet.create({

    commentIcon:{
        
        position: 'absolute',
        left: 80,
        top: 100,
        color: 'gray',
        
    },
    
    commenterPic: {
        height: 50,
        width: 50,
        borderRadius: 25,
        top: 20,
        left: 20
       
        
    },

    commenterName:
    {
        marginLeft: 25,
        top: 20,
        color: 'white',
        fontSize: 16,
        fontWeight:'400'
    },

    commenterHandle:
    {
       
        top:20,
        color: 'gray',
        fontSize: 16,
        fontWeight:'200'
    },

     date:
    {   
        top:20,
        marginLeft: 10,
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
    

    likeIcon:{
        position: 'absolute',
        left: 160,
        top: 100,
        color: 'gray',
        
    },

    replying:{
        position: 'absolute',
        left: 80,
        top: 40,
        color: 'gray',
        fontSize: 15,
        fontWeight:'200'
    },

    reply:
    {
      position: 'absolute',
        left: 80,
        top: 70,
        color: 'white',
        fontSize: 15,
        fontWeight:'300'  
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
