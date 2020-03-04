import React from "react";
import Proptypes from "prop-types";

// import { Container } from './styles';

export default function BlipPageHeader({ children }) {
  return (
    <React.Fragment>
      <div className="pv2 header">
        <h1 className="bp-fs-3 bp-c-city">{children}</h1>
      </div>
      <div className="bp-divider-h"></div>
    </React.Fragment>
  );
}

BlipPageHeader.propTypes = {
  title: Proptypes.string
};
