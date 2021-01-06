import React from "react";

import Main from "../Main";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> menu lado esquerdo */}
        <Main /> {/* feed */}
        {/* <SideBar /> menu da direita */ }
      </Wrapper>
    </Container>
  );
};

export default Layout;
