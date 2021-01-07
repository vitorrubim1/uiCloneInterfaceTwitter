import React from "react";
import SticyBox from "react-sticky-box";

import List from "../List ";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <SticyBox> {/*pra ter o comportamento de scrollagem igual ao do twitter*/}
        <Body>
          {/* <p>{"Lorem ipsum dolor sit amet consectetur".repeat(80)}</p> */}
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Lorem Ipsum" nickname="@loremlorem" />,
              <FollowSuggestion name="Lorem Ipsum" nickname="@loremlorem" />,
              <FollowSuggestion name="Lorem Ipsum" nickname="@loremlorem" />,
              <FollowSuggestion name="Lorem Ipsum" nickname="@loremlorem" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </SticyBox>
    </Container>
  );
};

export default Sidebar;
