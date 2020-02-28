import React, {Component, StyleSheet} from 'react';
import {listMessages} from './../../utils/gmailApi';
import EmailListingItem from "./EmailListingItem";

export default class ListingFilter extends Component {

    constructor() {
        super();
        this.state = {
            isSelected: false
        };
    }

    render() {
        return (
            <div className={"searchScroll"}>
                <div className={"containerSearchItem"}>
                    {this.props.labels &&
                    this.props.labels.map((label, index) => {
                        return <span className={index === 0 ? "searchItem selected" : "searchItem"} onClick={this.handleClick}>{label.name}</span>
                    })
                    }
                </div>
            </div>
        )
    }
}
