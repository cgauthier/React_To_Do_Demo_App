import React from 'react';
import Row from './Row/Row';
import './Output.css';

function Output(props) {
    return (
        <ul>
            {
                props.todoList.map((todoItem, idx) => {
                    return <Row 
                                key={idx} 
                                entry={todoItem} 
                                idx={idx} 
                                deleteRowClickAction={props.deleteRowClickAction}
                                setTodoEntry={props.setTodoEntry} 
                                todoList={props.todoList}
                                updateTodoEntry={props.updateTodoEntry}
                            />
                })
            }
        </ul>
    );
}

export default Output;