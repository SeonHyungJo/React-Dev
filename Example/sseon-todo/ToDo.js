import React, {Component} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

export default class ToDo extends Component{

    constructor(props){
        super(props);
        this.state = {  isEditing: false, toDoValue: props.text,}
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        deleteToDo: PropTypes.func.isRequired,
        id : PropTypes.string.isRequired,
        uncompleteToDo : PropTypes.func.isRequired,
        completeToDo : PropTypes.func.isRequired,
        updateToDo : PropTypes.func.isRequired,
    }

    render(){
        const { isEditing, toDoValue } = this.state;
        const { text, id, deleteToDo, isCompleted} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.column}>

                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}>
                        </View>
                    </TouchableOpacity>
                    
                    {isEditing ? (
                        <TextInput 
                            style={[styles.text, styles.input, isCompleted ? styles.completedText : styles.uncompletedText]} 
                            value={toDoValue} 
                            multiLine={true}
                            onChangeText={this._controllInput}
                            returnKeyType={"done"}
                            onBlur={this._finishEditing}
                        />
                    ) : (
                    <Text style={[styles.text, isCompleted ? styles.completedText : styles.uncompletedText]} >
                        {text}
                    </Text>)}
                    
                </View>
                
                    {isEditing ? (
                        <View style={styles.action}>
                            <TouchableOpacity onPressOut={this._finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>v</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.action}>
                            <TouchableOpacity onPressOut={this._startEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>수정</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut={(event) => {event.stopPropagation; deleteToDo(id);}}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>x</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) }
              
            </View>
        )
    }

    _toggleComplete = (event) => {
        event.stopPropagation();
        const { isCompleted, uncompleteToDo, completeToDo, id} = this.props;
        if (isCompleted) {
            uncompleteToDo(id)
        }else{
            completeToDo(id)
        }
    }

    _startEditing = (event) => {
        event.stopPropagation();
        this.setState({
            isEditing : true,
        })
    }

    _finishEditing = (event) => {
        event.stopPropagation();
        const { toDoValue } = this.state;
        const { updateToDo, id } = this.props;
        this.setState({
            isEditing : false,
        });
        updateToDo(id, toDoValue);
    }

    _controllInput = text => {
        this.setState({
            toDoValue : text
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent : "space-between"
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    text: {
        fontWeight: "600",
        fontSize: 25,
        marginVertical: 20
    },
    completedCircle: {
        borderColor: "#bbb"    
    },
    uncompletedCircle: {
        borderColor: "#f23657"
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through",
    },
    uncompletedText: {
        color: "#353389",
    },
    column: { 
        flexDirection: "row",
        alignItems: "center",
        width: width / 2,
    },
    action: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    input: {
        marginVertical: 20,
        width: width / 2, 
    }

})