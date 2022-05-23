import React, { Component, useEffect } from 'react';
import { Image } from 'antd';
import './index.less';
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';

function Test() {
  const [num, setNum] = React.useState(0);
  const [name, setName] = React.useState(['zhaojun','john','tom']);
  // const addNum = () => setNum(num + 1);第一种写法
  const addNum = () => setNum(count => (count + 1));
  const addName = () => setName((count) => count + 1);
  const refDom = React.createRef(null);

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(refDom.current);  web-next-mac
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setNum((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, []) //不写空数组就相当于检测所有变量，只要改变，就执行回调函数。写了空数组，就都不检测。数组里含有谁，谁改变了，就执行这个函数。这个钩子相当于didMount和didUpdate

  return (
    <div>
      <div>{num}</div>
      <button onClick={addNum}>增加一个</button>
      <hr />
      <div ref={refDom}>{name}</div>
      <button onClick={addName}>增加一个</button>
      <button onClick={unmount}>卸载</button>
    </div>
  );
}

export default Test