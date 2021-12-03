import { Menu, Layout } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/Sider.css'
const { Header, Content, Footer, Sider } = Layout;

export default function SiderHomeTemplate() {
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <Menu theme="dark" mode="inline" className="pt-10" >
                <Menu.Item key="1">
                    <NavLink activeClassName="selected_menu" exact to="/" >Dashboard</NavLink>
                </Menu.Item>
                <Menu.Item key="2" >
                    <NavLink activeClassName="selected_menu" to="/profile" >Profile</NavLink>

                </Menu.Item>
                <Menu.Item key="3" >
                    <NavLink activeClassName="selected_menu" to="/family" >Family</NavLink>

                </Menu.Item>
                <Menu.Item key="4" >
                    <NavLink activeClassName="selected_menu" to="/records" >Records</NavLink>

                </Menu.Item>
            </Menu>
        </Sider>
    )
}
