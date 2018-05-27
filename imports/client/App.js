import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Item from './Item';
import Items from '../api/Items.js';
// let hello = "Hello Mechi!";

// let headdingClick = function() {
//     console.log('hello');
// }

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    headdingClick() {
        // console.log('hello')
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <header>
                    <h1>Level Up Voting</h1>
                    <LoginButtons />
                    <button onClick={this.showAll.bind(this)}>
                        Show {this.props.showAll ? 'One' : 'All'}
                    </button>
                </header>
                <main>
                    <form className='new-items' onSubmit={this.addItems.bind(this)}>
                        <input type='text' ref='itemOne' />
                        <input type='text' ref='itemTwo' />
                        <button type='submit'>Add Items</button>
                    </form>
                    {this.props.items.map((item) => {
                        return <Item item={item} key={item._id} />
                    })}
                </main>
            </div>
        );
    }
}
export default withTracker(() => {
    let itemsSub = Meteor.subscribe('allItems');
    let showAll = Session.get('showAll');
    return {
        showAll,
        ready: itemsSub.ready(),
        items: Items.find({}, {
            limit: showAll ? 50 : 1,
            sort: { lastUpdated: 1 }
        }).fetch()
    }
})(App);
