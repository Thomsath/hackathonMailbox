import React, {Component, StyleSheet} from 'react';

export default class EmailListingItem extends Component {

    constructor() {
        super();
    }

    render() {
        console.log(this.props.message.payload.headers);
        return (
            <ul>
                {this.props.message.snippet}
            </ul>
        );
    }
}

