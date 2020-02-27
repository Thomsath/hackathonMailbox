import React, {Component, StyleSheet} from 'react';

export default class EmailListingItem extends Component {

    constructor() {
        super();
        this.state = {
          subject: "",
          date: "",
          selected: false
        };
    }

    componentDidMount(prevProps, prevState, snapshot) {
        this.props.message.payload.headers.map(item => {
            console.log(item);
            if(item['name'] === "Subject") {
                this.setState({
                    subject: item['value']
                });
            } else if(item['name'] === 'Date') {
                this.setState({
                    date: item['value']
                });
            }
        });
    }

    render() {
        return (
            <li onClick={() => this.props.customClickEvent(this.props.message, this.state.subject, this.state.date)} data-index={this.props.index} className={this.state.selected ? "itemSelected" : "item" }>
                {this.state.subject &&
                    <h3>{this.state.subject}</h3>
                }
                <p>{this.props.message.snippet}</p>
            </li>
        );
    }
}

