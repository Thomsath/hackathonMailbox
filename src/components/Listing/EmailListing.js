import React, {Component, StyleSheet} from 'react';
import { listMessages } from './../../utils/gmailApi';
import EmailListingItem from "./EmailListingItem";

export default class EmailListing extends Component {

    constructor() {
        super();
        this.state = {
            messages: [],
            messagesContent: [],
            message: null
        };
    }

    componentDidMount() {
        this.fetchMessages()
    }

    setMessage = (messages) => {
        if (messages.length > 0) {
            this.props.setNbMessages(messages.length)
        }
        this.setState({
            messages
        })
    };

    setMessageContent = (oldState, messagesContent) => {
        this.setState([...oldState, messagesContent]);
    };

    fetchMessages = async() => {
       listMessages('', this.setMessage);
    };

    setMessageState = (message, subject, date, from) => {
        message.title = subject;
        message.date = date;
        message.from = from;
        this.props.selectedMail(message);
        this.props.setShowNewMessage();
    };

    render() {
        return (
            <ul className={"emailListing"}>
                {this.state.messages &&
                    this.state.messages.map((value, index) => {
                        return <EmailListingItem index={index} message={value} customClickEvent={this.setMessageState}/>
                    })
                }
            </ul>
        );
    }
}

