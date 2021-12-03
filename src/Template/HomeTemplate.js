import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";
import { Layout } from "antd";
import SiderHomeTemplate from "../components/Sider/Sider";

export default function HomeTemplate(props) {
    let { Component,
    } = props;
    const { Header } = Layout;
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                return (
                    <div
                        style={{

                            // minHeight: "100vh",
                        }}
                        className=" bg-transparent h-full w-full  "
                    >
                        <SiderHomeTemplate />
                        <div
                            style={{ paddingLeft: 200 }}
                            className=" bg-transparent duration-200 h-full flex flex-col w-full"
                        >
                            <Header className="header_theme flex justify-between items-center h-max-content z-40  p-0 text-gray-800  bg-transparent w-full  flex-col ">

                            </Header>
                            <div className="site-layout-background bg-transparent w-full  h-full   m-0 flex flex-col ">
                                <Component {...propsComponent}></Component>

                            </div>
                        </div>
                    </div>
                );
            }}
        />
    );
}