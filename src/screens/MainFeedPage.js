import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { PostFeed } from '../components/container';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';


class MainFeedPage extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style = {{flex:1, width:100 + "%", height: 100 + "%", backgroundColor:'black', paddingTop: 30, paddingBottom: 10 }}>
             
            <PostFeed/>

            <ActionButton
             buttonColor="rgba(231,76,60,1)" 
             radius = {120}
             style={styles.actionButton}
             bgColor = 'black'
             btnOutRange = 'black'
             >

          <ActionButton.Item buttonColor='dodgerblue' size = {50} onPress={() => this.props.navigation.navigate('UserProfile')}>
            <Icon name="ios-contact" style={styles.actionButtonIcon} size = {50} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='orangered' size = {50} onPress={() => this.props.navigation.navigate('Notifications')}>
            <Icon name="md-notifications" style={styles.actionButtonIcon} size = {50} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='magenta' size = {50} onPress={() => this.props.navigation.navigate('Search')}>
            <Icon name="md-search" style={styles.actionButtonIcon}/>
          </ActionButton.Item>

          

          <ActionButton.Item buttonColor='crimson' size = {50} onPress={() => this.props.navigation.navigate('Messaging')}>
            <Icon name="md-cloud-upload" style={styles.actionButtonIcon} size = {50} />
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='lime' size = {60} onPress={() => this.props.navigation.navigate('Media')}>
            <Icon name="ios-chatbubbles" style={styles.actionButtonIcon} size = {50} />
          </ActionButton.Item>

            </ActionButton>
            
       </View>
            );
    }
}

const styles = StyleSheet.create(
    {
      actionButtonIcon: {
        fontSize: 30,
        height: 30, 
        
    
  
      //  color: 'white',
      },  
      actionButton: {
        marginTop:15,
          paddingTop:45,
          paddingBottom:15,
          marginLeft:30,
          marginRight:30,
      },
    
    }
      );


export default MainFeedPage; 
