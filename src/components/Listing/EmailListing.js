import React, {Component, StyleSheet} from 'react';
import {listLabels, listMessages} from './../../utils/gmailApi';
import EmailListingItem from "./EmailListingItem";
import ListingFilter from "./ListingFilter";

export default class EmailListing extends Component {

    constructor() {
        super();
        this.state = {
            messages: [],
            messagesContent: [],
            message: null,
            colors: ['red', 'blue', 'green'],
            labels: null
        };
    }

    componentDidMount() {
        this.fetchMessages();
        this.fetchLabels();
    }

    fetchLabels() {
        listLabels(this.setLabel)
    };

    setLabel = (labels) => {
        this.setState({
            labels
        });
    };

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
        message.fromName = this.setFromName(from);
        message.fromAddress = this.setFromMail(from);
        this.props.selectedMail(message);
        this.props.setShowNewMessage();
    };

    setFromMail(from) {
        const start = from.indexOf('<');
        const end = from.indexOf('>');
        return from.substring(start + 1, end);
    }

    setFromName(from) {
        const start = from.indexOf('<');
        return from.substring(0, start - 1);
    }

    render() {
        return (
                <ul className={"emailListing"}>
                    {this.state.labels &&
                    <ListingFilter labels={this.state.labels}/>
                    }
                    {this.state.messages &&
                    this.state.messages.map((value, index) => {
                        return <EmailListingItem index={index}
                         message={value}
                         customClickEvent={this.setMessageState}
                         />
                    })
                }
            </ul>
        );
    }
}

