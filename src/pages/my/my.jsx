import React, { Component } from 'react';
import Header from '../../components/Header/index';
import './my.less';
import axios from 'axios';
import { Avatar } from 'antd';
import { Divider } from 'antd';
import { message } from 'antd';
export default class My extends Component {
    componentWillMount() {
        axios.get('http://localhost:3000/api/user').then(
            (response) => {
                console.log('成功了', response.data.data);
                this.setState({ list: response.data.data });
                if (response.data.code === 401) {
                    message.info('This is a normal message');
                    this.props.history.push(`/login`);
                }
            },
            (error) => {
                console.log('失败了', error);
            }
        );
    }
    render() {
        let title = '我的';
        return (
            <div>
                <Header title={title} />
                <div style={{ padding: '50px 0' }}>
                    <div className='person-info'>
                        <Avatar
                            size={80}
                            src='https://img01.yzcdn.cn/vant/cat.jpeg'
                        />
                    </div>

                    <Divider />
                </div>
            </div>
        );
    }
}
