/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  ListView,
  SectionList,
  Picker,
  Alert,
  Button,
  FlatList
} from 'react-native';

import styles from './style.js'

export default class MyStack extends Component {

    constructor() {

            super();
            this.state = {
                text: "",
                arrtext: []
            };

        }

        _push() {
            this.setState({ arrtext:[...this.state.arrtext,this.state.text] })
            this.setState({ text: "" })
        }
        _pop() {
            Alert.alert(
                'Comfirm Delete',
                'are you sure you wanna delete ?',
                [
                {text: 'Yes', onPress: () => this.setState({
                    arrtext:[...this.state.arrtext.slice(0,this.state.arrtext.indexOf(this.state.arrtext))]
                })},
                {text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel'},
                
            ],
            )
        }

        _setText(input){
            this.setState( {text: input} )
        }
   
    render() {
        return(

            /*<View style={styles.container}>
                <SectionList
                sections={[
                    {title: 'D', data: ['Devin']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>*/


            <View style={{justifyContent: 'center', alignItems: 'center'}}>

                <Text style={styles.welcome}> Input Something </Text>

                <TextInput style={{width: 200, height:40, borderWidth: 1 }} 
                onChangeText={(input) => this._setText(input)} value={this.state.text} />

                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <TouchableHighlight onPressIn = {() => this._push()}>
                        <View style={[styles.button, {backgroundColor: '#1C1C1C'}]} >
                            <Text style={styles.blue}>
                                PUSH
                            </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPressIn = {() => this._pop()}>
                        <View style={[styles.button, {backgroundColor: '#B40404'}]} >
                            <Text style={styles.blue}>
                                POP
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={{borderWidth: 1, width: 250, alignItems: 'center', marginTop: 30 }}>
                    <FlatList
                    data={this.state.arrtext}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    />
                </View>
                               
            </View>

            
        )
    }
}


AppRegistry.registerComponent('MyStack', () => MyStack);
