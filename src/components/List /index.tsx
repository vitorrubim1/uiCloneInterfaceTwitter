import React from "react";

import { Container, Item, Title } from "./styles";

interface Props {
  title: string;
  elements: React.ReactNode[]; //Lista de elementos
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </Container>
  );
};

export default List;
