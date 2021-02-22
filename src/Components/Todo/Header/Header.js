import React from 'react';

function Header(props) {
    return (
    <h1>To-Do List as of {props.today}</h1>
    );
}

export default Header;