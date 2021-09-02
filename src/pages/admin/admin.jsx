import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Item from '../../components/Item/index';
import HeaderTabs from '../../components/HeaderTabs/index';
import axios from 'axios';
export default class Admin extends Component {
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
                {/* <HeaderTabs /> */}
                <div style={{ padding: '50px 0' }}>
                    {list.map((item) => {
                        return <Item key={item.id} {...item} />;
                    })}
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
