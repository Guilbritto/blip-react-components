import React from "react";
import Proptypes from "prop-types";

export const BlipPageHeader = ({ children }) => (
  <>
    <div className="pv2 header">
      <h1 className="bp-fs-3 bp-c-city">{children}</h1>
    </div>
    <div className="bp-divider-h"></div>
  </>
);

BlipPageHeader.propTypes = {
  title: Proptypes.string
};
