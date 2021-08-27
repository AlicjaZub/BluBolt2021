import React, { Component }  from 'react';

const Button = (props) => <button className={props.title} type={props.type} title={props.title} onClick={props.click}>{props.value}</button>

export default Button;