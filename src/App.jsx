import React from 'react';
import { Flex, Layout } from 'antd';
const { Sider, Content, Header } = Layout;
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [burger, setBurger] = useState(false);

  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    backgroundColor: '#333842',
    position: 'fixed',
    width: '100%',
    marginBottom: '100px',
    zIndex: '9999',
    padding: '0px'
  };
  const contentStyle = {
    color: '#fff',
    backgroundColor: ' #282c34',
  };
  const siderStyle = {
    position: 'fixed',
    height: '100%',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgb(27, 29, 35)',
    padding: '25px',
  };
  const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
  };

  return (
    <Layout style={layoutStyle}>
      <Sider width="20%" style={siderStyle} className='sider'>
        <div className='wrapperNav'>
          <NavLink to='/contacts' style={({ isActive, isPending }) => ({
            color: isActive ? 'rgb(248, 90, 90)' : isPending ? ' rgb(254, 105, 105)' : '#fff',
          })}>
            Мессенджер
          </NavLink>

          <NavLink to='/page/user1' style={({ isActive, isPending }) => ({
            color: isActive ? 'rgb(248, 90, 90)' : isPending ? ' rgb(254, 105, 105)' : '#fff',
          })} className='navigation'>
            Моя страница
          </NavLink>

          <NavLink to='/music' style={({ isActive, isPending }) => ({
            color: isActive ? 'rgb(248, 90, 90)' : isPending ? ' rgb(254, 105, 105)' : '#fff',
          })} className='navigation'>
            Музыка
          </NavLink>
        </div>
      </Sider>

      <Layout className='layout'>
        <Header style={headerStyle} className='adaptivHeader'>
          <div style={{padding: '15px'}}>
          <div className={burger ? 'burger active' : 'burger'} onClick={() => setBurger(!burger)}>
            <span></span>
          </div>
          </div>
         
          <div className={burger ? 'navBurger active' : 'navBurger'}>
            <div className='wrapperNav'>
              <NavLink to='/contacts' style={({ isActive, isPending }) => ({
                color: isActive ? 'rgb(248, 90, 90)' : isPending ? ' rgb(254, 105, 105)' : '#fff',
              })} onClick={() => setBurger(false)}>
                Мессенджер
              </NavLink>

              <NavLink to='/page/user1' style={({ isActive, isPending }) => ({
                color: isActive ? 'rgb(248, 90, 90)' : isPending ? ' rgb(254, 105, 105)' : '#fff',
              })} className='navigation' onClick={() => setBurger(false)}>
                Моя страница
              </NavLink>

              <NavLink to='/music' style={({ isActive, isPending }) => ({
                color: isActive ? 'rgb(248, 90, 90)' : isPending ? ' rgb(254, 105, 105)' : '#fff',
              })} className='navigation' onClick={() => setBurger(false)}>
                Музыка
              </NavLink>
            </div>
          </div>
        </Header>
        <Content style={contentStyle} className='Content'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default App;