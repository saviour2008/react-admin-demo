import React, { Component } from 'react';
import { Layout } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Route, Switch, NavLink, Redirect, withRouter } from 'react-router-dom';
import Login from './pages/login/login';
import My from './pages/my/my';
import Admin from './pages/admin/admin';
import './App.less';
const { Content, Footer } = Layout;

class App extends Component {
    navToMy = () => {
        console.log(this.props);
        this.props.history.push(`/my`);
    };
    render() {
        return (
            <Layout className='layout'>
                <Content>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/my' component={My}></Route>
                        <Route path='/' component={Admin}></Route>
                        <Redirect to='/' />
                    </Switch>
                </Content>
                <Footer className='footer'>
                    <NavLink to='/'>
                        <HomeOutlined className='blue footer-button' />
                    </NavLink>

                    <UserOutlined
                        onClick={this.navToMy}
                        className='blue footer-button'
                    />
                </Footer>
            </Layout>
        );
    }
}
export default withRouter(App);
