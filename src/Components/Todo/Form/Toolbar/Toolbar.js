import React from 'react';

function Toolbar(props) {
    return (
        <div><button onClick={props.resetClickAction}>Delete All</button></div>
    );
}

export default Toolbar;