import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

import { Layout, Menu } from 'antd';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
     <Layout className="layout">
      <Header>
        <div className="logo"  style={{ color: 'white' }}>Octank Survey Manager</div>
        
      </Header>
      <Content style={{ padding: '50px' }}>
       
        <div className="site-layout-content">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Octank Survey Manager ©2020 Created by TechnoCrats</Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();