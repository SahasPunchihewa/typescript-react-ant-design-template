import React from "react";
import {HeaderContainer, HeaderWrapper, LogoContainer, MenuContainer, MenuItem} from "./styled";

const AppHeader: React.FC = (props) => {

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoContainer>
                    Logo
                </LogoContainer>
                <MenuContainer>
                    <MenuItem>
                        Menu 1
                    </MenuItem>
                    <MenuItem>
                        Menu 2
                    </MenuItem>
                    <MenuItem>
                        Menu 3
                    </MenuItem>
                </MenuContainer>
            </HeaderContainer>

        </HeaderWrapper>
    );
}

export default AppHeader;
