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
            <div className={"mailContainer"}>
                {this.props.selectedMail &&
                    <>
                    <h3>{this.props.selectedMail.title}</h3>
                        <p>{this.props.selectedMail.date}</p>
                <p>{this.props.selectedMail.snippet}</p>
                    </>
                }
            </div>
        )
    }
}
