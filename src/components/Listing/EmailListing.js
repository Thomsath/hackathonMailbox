import React, {Component, StyleSheet} from 'react';
import { listMessages } from './../../utils/gmailApi';
import EmailListingItem from "./EmailListingItem";

export default class EmailListing extends Component {

    constructor() {
        super();
        this.state = {
            messages: [],
            messagesContent: []
        };
    }

    componentDidMount() {
        this.fetchMessages()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.messages);
    }

    setMessage = (messages) => {
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

    render() {
        return (
            <ul>
                {this.state.messages &&
                    this.state.messages.map((value, index) => {
                        return <EmailListingItem message={value} />
                    })
                }
            </ul>
        );
    }
}

