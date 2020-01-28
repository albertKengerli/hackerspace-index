import React, { Component } from 'react';

export default class Header extends Component {
    list = [1,2,3];

    render() {

        const navList = this.list.map( elem => <span> {elem} </span>);
        return (
            <div>
                {navList}
            </div>
        )
    }
}
