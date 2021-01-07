import React from "react";

import MenuBar from "../MenuBar";
import Main from "../Main";
import Sidebar from "../Sidebar";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar /> {/* menu lado esquerdo */}
        <Main /> {/* feed */}
        <Sidebar /> {/* menu da direita */ }
      </Wrapper>
    </Container>
  );
};

export default Layout;
