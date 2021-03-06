import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Item from '../../components/Item/index';
import HeaderTabs from '../../components/HeaderTabs/index';
import axios from 'axios';
import { connect } from 'react-redux';
import styles from './home.module.less';
import { Affix, Button } from 'antd';
import Test from '../../components/test';
class Home extends Component {
    state = { title: '首页', list: [] };
    getStudentData = () => {
        axios.get('http://localhost:3000/api/list').then(
            (response) => {
                console.log('成功了', response.data.data);
                this.setState({ list: response.data.data });
            },
            (error) => {
                console.log('失败了', error);
            }
        );
    };
    componentDidMount() {
        this.getStudentData();
    }
    render() {
        const { list, title } = this.state;
        return (
          <div style={{ backgroundColor: 'white' }}>
            <Header title={title} />
            <div style={{ padding: '40px 0' }}>
              <Affix offsetTop={40}>
                <div className={styles['top-fixed']}>
                  <Button
                    type='primary'
                    className={`${styles.mr10} ${styles.ml10} ${styles.active}`}
                  >
                    primary
                  </Button>
                  <Button className={`${styles.mr10} ${styles.ml10}`}>
                    secondary
                  </Button>
                  <Button className={`${styles.mr10} ${styles.ml10}`}>
                    secondary
                  </Button>
                  <span className={styles['like-mount']}>{this.props.userInfo}</span>
                </div>
              </Affix>
              {list.map((item) => {
                return <Item key={item.id} {...item} />;
              })}
              <Test />

              {/* <button onClick={this.getStudentData}>
                        点我获取学生数据
                    </button>
                    <button onClick={this.saveCarData}>
                        保存汽车数据
                    </button> */}
            </div>
          </div>
        );
    }
}

export default connect((state) => ({
    userInfo: state.userInfo,
}))(Home);
