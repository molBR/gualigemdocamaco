import React, {Component} from 'react';
import { connect } from 'react-redux';


const Text = ({ Text }) => (

     
    <h1>{Text}</h1>

);

export default connect(state => ({Text : state}))(Text);

