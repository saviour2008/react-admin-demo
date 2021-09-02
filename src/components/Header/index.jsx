import React, { Component } from 'react';
import './index.less';

export default class Header extends Component {
    render() {
        const { title } = this.props;
        return <div className='header'>{title}</div>;
    }
}
