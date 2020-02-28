import React, {Component, StyleSheet} from 'react';
import {deleteMessage, listMessages} from './../../utils/gmailApi';
import ResponseMail from "./../Mailbox/ResponseMail";

export default class MailContent extends Component {

    constructor() {
        super();
    }

    deleteMessage(messageId) {
        deleteMessage(messageId)
    };

    render() {
        return (
            <div className={"mailContainer"}>
                {this.props.selectedMail &&
                <div className={"mailContainerContent"}>
                    <p className={"bold mailContent fromName"}>{this.props.selectedMail.fromName}</p>
                    <h2 className={"mailTitle bold"}>{this.props.selectedMail.title}</h2>
                    <p className={"mailContent"}>{this.props.selectedMail.date}</p>
                    <p className={"mailContent snippet"}>{this.props.selectedMail.snippet}</p>
                    <button onClick={() => this.deleteMessage(this.props.selectedMail.id)}>fjpods</button>
                    <ResponseMail/>
                </div>
                }
            </div>
        )
    }
}
