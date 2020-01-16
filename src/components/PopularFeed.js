import React, { Component, Fragment  } from "react";
import { Text, FlatList, StyleSheet, View, ImageBackground} from "react-native";
import { Popular } from '../screens/index';


class PopularFeed extends Component {
    _renderPopular({ item }) {
       return <Popular item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        return (

       
       <Fragment>
       <View style = {styles.header}> 
    <Text style = {{color: 'white', left: 10, fontSize: 20, fontWeight: '600'}}> Popular </Text>
        
        </View>

        <View style = {styles.flatList}> 
        <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor={this._returnKey}
            renderItem={this._renderPopular}
             />
        </View>
       </Fragment>

        );        
    }
}


export default PopularFeed;

const styles =  StyleSheet.create({
   
    flatList: {
        
        borderColor: 'white'
        },
    
    

    header:{
        
        borderColor: 'gray',
        height: 35,
        width: 100 + '%',
        borderBottomWidth: 0.4
               
    },

    

})