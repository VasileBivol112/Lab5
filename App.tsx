import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined}  from '@ant-design/icons'
import { Layout, Menu, Breadcrumb, MenuProps, theme, Row, Col } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Card from 'antd/es/card/Card';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cards, setCards] = useState<{
    title: string
    name: string
    email: string
    password: string
  }[]>([])

  return (
    <div className="App">
     <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#001529" }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Vasile</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
            <form onSubmit={(e) => {
              e.preventDefault()
              console.log('Date: ',title, name, email, password)
              setCards([...cards, {
                title,
                name,
                email,
                password
              }])
            }}>
               <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                  Titlu card:
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                </Col>
              </Row>

              <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                  Nume:
                  <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                </Col>
              </Row>

                <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                  Email:
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                </Col>
                </Row>

              <Row style={{
                marginBottom: "20px"
              }}>
              <Col span={6}>
                <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>
                </Col>
              </Row>

              <Row>
                <Col span={6}>
                  <button>Submit</button>
                </Col>
              </Row>
            </form>

            {cards.map(card => (
              <Card title={card.title} style={{ width: 300, marginTop: "20px" }}>
                <p>Nume: {card.name}</p>
                <p>Email: {card.email}</p>
                <p>Password: {card.password}</p>
              </Card> 
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
