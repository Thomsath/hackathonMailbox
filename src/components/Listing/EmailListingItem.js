import React, {Component, StyleSheet} from 'react';

export default class EmailListingItem extends Component {

    constructor() {
        super();
        this.state = {
          subject: "",
          date: "",
            from: "",
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
            }
            if(item['name'] === 'Date') {
                this.setState({
                    date: item['value']
                });
            }
            if(item['name'] === 'From') {
                this.setState({
                    from: item['value']
                });
            };
        });
    }

    showFrom(from) {
        console.log(from);
        const start = from.indexOf('<');
        const end = from.indexOf('>');
        return from.substring(0, start);
    }

    render() {
        return (
            <li onClick={() => {
                this.props.customClickEvent(this.props.message, this.state.subject, this.state.date, this.state.from);
                this.setState({selected: true}) }}
                data-index={this.props.index}
                className={this.state.selected ? "emailItem itemSelected" : "emailItem item" }>
                {this.state.subject &&
                    <>
                    <p className={"fromLabel"}> {this.showFrom(this.state.from)}</p>
                    <h3 className={"bold subjectLabel"}>{this.state.subject}</h3></>
                }
                <p>{this.props.message.snippet}</p>
            </li>
        );
    }
}

