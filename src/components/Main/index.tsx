import React from "react";

// import ProfilePage from "../ProfilePage";

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Vitor Rubim</strong>
          <span>13 Tweets</span>
        </ProfileInfo>
      </Header>
      
      {/* <ProfilePage /> o feed em si */}
      
      <BottomMenu>
        {" "}
        {/*menu de baixo, pra dispositivos menores */}
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
