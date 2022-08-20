import React from "react";
import {Content} from "antd/es/layout/layout";
import AppHeader from "./header/AppHeader";
import {ILayout} from "./types";
import AppFooter from "./footer/AppFooter";
import {LayoutContainer} from "./styled";

const AppLayout: React.FC<ILayout> = ({body}) => {

    return (
        <LayoutContainer>
            <AppHeader/>
            <Content>{body}</Content>
            <AppFooter/>
        </LayoutContainer>
    );
}

export default AppLayout;