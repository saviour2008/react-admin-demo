import React, { Component } from 'react';
import Header from '../../components/Header/index';
import './my.less';
import axios from 'axios';
import { Avatar, Row, Col, Divider, message } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { increment } from '../../redux/actions/userInfo';
import { connect } from 'react-redux';
class My extends Component {
  heartIcon = React.createRef();
  state = {
    good: 0,
  };
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
  addClickMount = () => {
    console.log(this.heartIcon);
    this.heartIcon.current.className = 'animation';
    this.heartIcon.current.addEventListener('animationend', () => {
      this.heartIcon.current.className = '';
    });
    // this.setState((state) => {
    //     return { good: state.good + 1 };
    // });
    this.props.increment(1);
  };
  render() {
    let title = '我的';
    return (
      <div>
        <Header title={title} />
        <div style={{ padding: '50px 0' }}>
          <div className='person-info'>
            <Avatar size={80} src='https://img01.yzcdn.cn/vant/cat.jpeg' />
            <div className='name'>
              <div>Hello Kitty</div>
              <div>{this.props.userInfo}</div>
            </div>
            <HeartTwoTone
              className='heart'
              ref={this.heartIcon}
              twoToneColor='#eb2f96'
              onClick={this.addClickMount}
            />
            {/* <HeartOutlined
                            className=''
                            onClick={this.addClickMount}
                        /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userInfo: state.userInfo,
  }),
  {
    increment,
  }
)(My);
