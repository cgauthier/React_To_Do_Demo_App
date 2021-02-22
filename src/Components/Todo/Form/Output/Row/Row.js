import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './Row.css';

function Row(props) {
    
    const [rowEditState, setRowEditState] = useState(props.rowEditState);
    const [fieldEntry, setFieldEntry] = useState(props.entry);
    const [canUpdate, setCanUpdate] = useState(props.canUpdate);
    const firstRender = useRef(true);
    const inputField = useRef(null);

    function editRowClickAction(e) {
        let idx;
        if(!rowEditState) {
            setRowEditState(!rowEditState);
        } else {
            idx = e.target.getAttribute('idx');
            validateEditedValue();
            if(canUpdate) {
                props.updateTodoEntry(idx, fieldEntry);
                setRowEditState(!rowEditState);
            } 
        }
    }

    function validateEditedValue() {
        setCanUpdate(!(!fieldEntry || fieldEntry === props.entry || props.todoList.includes(fieldEntry)));
    }

    function enterFunc(e) {
        if(e.charCode === 13 && !props.disableAdd) {
            editRowClickAction(e);
        }
    }

    function setRowEditStateCode (e) {
        if(!rowEditState) {
            return props.entry;
        } else {
            return <input   type='text' 
                            name='fieldentry' 
                            value={fieldEntry} 
                            idx={props.idx} 
                            ref={inputField}
                            onKeyPress={enterFunc}
                            onChange={e => setFieldEntry(e.target.value)}
                    />
            
        }
    }

    useEffect(function() {
        if(rowEditState) {
            if(firstRender.current) {
                firstRender.current = false;
                inputField.current.focus();
                return;
            }
            validateEditedValue();
        }
    });

    function setEditButtonLabel() {
        if(!rowEditState) {
            return 'Edit';
        } else {
            return 'Update';
        }
    }

    function setDeleteButtonLabel() {
        if(!rowEditState) {
            return 'Delete';
        } else {
            return 'Cancel';
        }
    }

    function cancelAction() {
        setRowEditState(!rowEditState);
    }

    function setDeleteFunc() {
        if(!rowEditState) {
            return props.deleteRowClickAction;
        } else {
            return cancelAction;
        }
    }

    return (
        <li>
            <span className='rowEntry'>{setRowEditStateCode()}</span> 
            <span className='rowControls'>
                <button idx={props.idx} onClick={editRowClickAction}>{setEditButtonLabel()}</button>
                <button idx={props.idx} onClick={setDeleteFunc()}>{setDeleteButtonLabel()}</button>
            </span>
        </li>
    );
}

Row.propTypes = {
    rowEditState: PropTypes.bool.isRequired,
    fieldEntry: PropTypes.string,
    canUpdate: PropTypes.bool.isRequired
};

Row.defaultProps = {
    rowEditState: false,
    fieldEntry: "",
    canUpdate: false
};

export default Row;