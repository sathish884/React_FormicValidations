import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { theme } from 'antd'; // Adjust import as necessary
import RouterLinks from './RouterLinks'; // Adjust import as necessary

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  { key: 1, label: 'Dashboard', icons: UploadOutlined, path: "/" },
  { key: 2, label: 'Create Books', icons: UserOutlined, path: "/create-books" },
  { key: 3, label: 'Create Users', icons: VideoCameraOutlined, path: "/create-users" }
];

const items = menuItems.map(
  (item, index) => ({
    key: String(index + 1),
    icon: React.createElement(item.icons),
    label: item.label,
    path: item.path
  }),
);

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline">
            {items.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <RouterLinks />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
