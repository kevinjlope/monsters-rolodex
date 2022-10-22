// Your task is to create a simple React component named Label rendered as a <div> which takes a text value and a foreground color as input.
// For example:
// <Label text="Hello" color="red" />
// should render as:
// <div style={{color: 'red'}}>Hello</div>

import React from 'react'

function Label(props) {
    return (
        <div style={{color: props.color}}>{props.text}</div>
    )
}