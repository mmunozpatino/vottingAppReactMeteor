import React, { Component } from 'react';

// let hello = "Hello Mechi!";

// let headdingClick = function() {
//     console.log('hello');
// }

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }
    headdingClick(){
        // console.log('hello')
        this.setState({count: this.state.count + 1});
    }
    render(){
        return(
            // bind es para que el this. sea válido en la funcion
            <header onClick={this.headdingClick.bind(this)}>
                {/* {this.state.count} */}
                <Heading 
                    count = {this.state.count}
                />
            </header>
        );
    }
}

class Heading extends Component{
    render(){
        return(
            <h1>{this.props.count}</h1>
        )
    }
}