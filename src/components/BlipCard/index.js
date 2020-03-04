import React from "react";

import { Container, ContainerMaster, ContainerFlex } from "./styles";
import BlipIcon from "../../components/BlipIcon";

export function BlipCard({ title, smallTitle, image }) {
  return (
    <React.Fragment>
      <Container>
        <BlipIcon image={image} />
        <div>
          <span>{title}</span>
        </div>
        <div>
          <small>{smallTitle}</small>
        </div>
      </Container>
    </React.Fragment>
  );
}

export function BlipCardContainer({ children }) {
  return (
    <ContainerFlex>
      <ContainerMaster>{children}</ContainerMaster>
    </ContainerFlex>
  );
}
