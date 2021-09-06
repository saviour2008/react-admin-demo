import React, { Component } from 'react';
import { Spin } from 'antd';
import './index.less';

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <Spin className='loading-icon' />
            </div>
        );
    }
}
