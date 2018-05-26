import React, { Component } from 'react';

let hello = "Hello Mechi!";

// let headdingClick = function() {
//     console.log('hello');
// }

export default class App extends Component {
    headdingClick(){
        console.log('hello')
    }
    render(){
        return(
            <h1 onClick={this.headdingClick}>{hello}</h1>
        );
    }
}