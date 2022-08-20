import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 45px;
  background-color: #282c34;
  width: 100vw;
  position: fixed;
  z-index: 100;
  top: 0;
  color: aliceblue;
  display: flex;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

export const LogoContainer = styled.div`
    
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
`;

export const MenuItem = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;