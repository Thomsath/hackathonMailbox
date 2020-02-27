import React, {Component, StyleSheet} from 'react';
import { listMessages } from './../../utils/gmailApi';

export default class MailContent extends Component {

    constructor() {
        super();
    }
    render() {
        console.log('ko');
        console.log(this.props.selectedMail);
        return (
            <>
                {this.props.selectedMail &&
                <p>{this.props.selectedMail.snippet}</p>
                }
            </>
        )
    }
}
