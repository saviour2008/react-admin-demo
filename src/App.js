import React, { Component, lazy, Suspense } from 'react';
import { Layout } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Route, Switch, NavLink, Redirect, withRouter } from 'react-router-dom';
import Login from './pages/login/login';
// import Home from './pages/home/home';
// import My from './pages/my/my';
import Loading from './components/Loading';
import './App.less';
const { Content, Footer } = Layout;
const Home = lazy(() => import('./pages/home/home'));
const Test = lazy(() => import('./pages/test/test'));
const My = lazy(() => import('./pages/my/my'));
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
            <Suspense fallback={<Loading />}>
              <Route exact path='/' component={Test}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/my' component={My}></Route>
              <Redirect to='/' />
            </Suspense>
          </Switch>
        </Content>
        <Footer className='footer'>
          <NavLink to='/'>
            <HomeOutlined className='blue footer-button' />
          </NavLink>

          <UserOutlined onClick={this.navToMy} className='blue footer-button' />
        </Footer>
      </Layout>
    );
  }
}
export default withRouter(App);
