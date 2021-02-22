import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Form from './Form/Form';

function Todo(props) {
    
    const [todoList, setTodoList] = useState(props.todoList);
    const [todoEntry, setTodoEntry] = useState(props.todoEntry);
    const [disableAdd, setDisableAdd] = useState(true);
    const firstRender = useRef(true);
    const inputTextField = useRef(null);
    
    function clearField() {
        setTodoEntry("");
        inputTextField.current.focus();
        setDisableAdd(true);
    }

    function resetTodoList() {
        setTodoList([]);
        clearField();
    }

    function deleteRow(e) {
        const idx = e.target.getAttribute('idx');
        let tmp = [...todoList];
        tmp.splice(idx, 1);
        setTodoList([...tmp]);
        clearField();
    }

    function updateTodoEntry (idx, val) {
        let tmp = [...todoList];
        tmp[idx] = val;
        setTodoList([...tmp]);
        clearField();
    }

    const addTodoEntry = (event) => {
        setTodoList([...todoList, todoEntry]);
        clearField();
    }

    function validateTodoEntry() {
        let flag = (todoEntry) ? false: true;
        if(todoList.length && todoEntry) {
            flag = todoList.includes(todoEntry);
        }
        return flag;
    }

    useEffect(() => {
        if(firstRender.current) {
            firstRender.current = false;
            clearField();
            return;
        }
        setDisableAdd(validateTodoEntry())
    });

    return (
        <>
            <Header today={props.today} />
            <Form 
                inputTextField={inputTextField} 
                clearClickAction={clearField} 
                addClickAction={addTodoEntry} 
                todoList={todoList} 
                todoEntry={todoEntry} 
                setTodoEntry={setTodoEntry} 
                disableAdd={disableAdd} 
                deleteRowClickAction={deleteRow}
                resetTodoList={resetTodoList}
                updateTodoEntry = {updateTodoEntry}
            />
        </>
    );
}

Todo.propTypes = {
    todoEntry: PropTypes.string,
    todoList: PropTypes.array.isRequired
};

Todo.defaultProps = {
    todoEntry: "",
    todoList: []
};

export default Todo;