import React from 'react';
import Input from './Input/Input';
import Output from './Output/Output';
import Toolbar from './Toolbar/Toolbar';

function Form(props) {
    return (
        <>
            <Input 
                inputTextField={props.inputTextField} 
                addClickAction={props.addClickAction} 
                clearClickAction={props.clearClickAction}
                inputTextValue={props.todoEntry} 
                setTodoEntry={props.setTodoEntry} 
                disableAdd={props.disableAdd}
            />
            <Output 
                todoList={props.todoList} 
                deleteRowClickAction={props.deleteRowClickAction}
                setTodoEntry={props.setTodoEntry} 
                updateTodoEntry={props.updateTodoEntry}
            />
            <Toolbar resetClickAction={props.resetTodoList}/>
        </>
    );
}

export default Form;