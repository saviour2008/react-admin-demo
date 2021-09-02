import React, { Component } from 'react';
import './login.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
export default class Login extends Component {
    formRef = React.createRef();
    onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios
            .post('http://localhost:3000/api/new', {
                id: 1,
                name: 'admin',
                deptId: 1,
                salary: 10000,
            })
            .then(
                (response) => {
                    console.log('成功了', response.data);
                    this.props.history.push(`/my`);
                },
                (error) => {
                    console.log('失败了', error);
                }
            );
    };
    componentDidMount() {
        console.log(document.cookie);
    }
    render() {
        return (
            <div className='form-container'>
                <Form
                    ref={this.formRef}
                    name='normal_login'
                    className='login-form'
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className='site-form-item-icon' />
                            }
                            placeholder='Username'
                        />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className='site-form-item-icon' />
                            }
                            type='password'
                            placeholder='Password'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name='remember'
                            valuePropName='checked'
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className='login-form-forgot' href=''>
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
