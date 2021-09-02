import React, { Component } from 'react';
import { Image } from 'antd';
import './index.less';
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

export default class Item extends Component {
    render() {
        const {
            title,
            content,
            comments,
            likes,
            articlePicture,
            writer,
            time,
            looks,
        } = this.props;

        return (
            <div className='container'>
                <div>
                    {writer} | {time}
                </div>
                <div className='title'>{title}</div>
                <div className='content'>
                    <div>
                        <div className='text'>{content}</div>
                        <div>
                            <EyeOutlined />
                            <span className='mr10'>{looks}</span>
                            <LikeOutlined />
                            <span className='mr10'>{likes}</span>
                            <MessageOutlined />
                            <span className='mr10'>{comments}</span>
                        </div>
                    </div>

                    <div className='pic'>
                        <Image width={134} src={articlePicture} />
                    </div>
                </div>
            </div>
        );
    }
}
