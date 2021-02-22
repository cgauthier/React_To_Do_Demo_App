import React from 'react';

function Input(props) {
    
    function enterFunc(e) {
        if(e.charCode === 13 && !props.disableAdd) {
            props.addClickAction();
        }
    }
    
    return (
        <div>
            <input 
                ref={props.inputTextField} 
                type='text' 
                name='todoitem' 
                value={props.inputTextValue} 
                onChange={e => props.setTodoEntry(e.target.value)}
                onKeyPress={enterFunc}
            /> 
            <button disabled={props.disableAdd} onClick={props.addClickAction}>Add</button>
            <button disabled={props.disableAdd} onClick={props.clearClickAction}>Clear</button>
        </div>
    );
}

export default Input;


