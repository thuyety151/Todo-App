import React, { useState } from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity, Button} from 'react-native';


export default class InputBar extends React.Component{
    constructor(props){
        super(props);
        this.state={todoInput: ''};
        
    }

    submitAndClear = () => {

        this.setState({
          todoInput: ''
        })
    }

    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={(todoInput)=>this.props.textChange(todoInput)}
                    value={this.props.todoInput }
                    clearButtonMode="always"
                    placeholder='Enter text...'
                    
                />
                <TouchableOpacity style={styles.addButton} onPress={this.submitAndClear,()=>this.props.addNewTodo()}>
                    <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
            </View> 
        );
    }
}

const styles=StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: {width:0 ,height:3},
        shadowColor:'#171717',
        shadowOpacity: .1
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex:1,
        fontSize:18,
        height:35
    },
    addButton:{
        width:100,
        backgroundColor:'#FFCE00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize:18,
        fontWeight: '700'
    }
});
