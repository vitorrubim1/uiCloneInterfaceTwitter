import React from "react";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  // EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}
        <h1>Vitor Rubim</h1>
        <h2>@vitoorRubim</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit Github:
          <a href="https://github.com/vitorrubim1"> Vitorrubim1</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 11 de junho de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>83</strong>
          </span>

          <span>
            <strong>16 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
