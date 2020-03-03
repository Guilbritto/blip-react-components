import React from "react";
import { BlipCard, BlipCardContainer } from "./components/BlipCard";
import BlipInputReact from "./components/BlipInput";
import { BlipLoading } from "./components/BlipLoading";
import { PageHeader } from "./components/PageHeader";
import Avatar from "./images/avatar.svg";
function App() {
  return (
    <>
      <h1>BlipCard Component</h1>
      <h2>Using a single Card</h2>
      <h3>Using a image with a URL</h3>
      <BlipCard
        title="Some Title"
        image="https://cdn3.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
        smallTitle="Some small"
      />
      <h3>Using a image with a SVG</h3>
      <BlipCard title="Avatar" image={Avatar} smallTitle="With svg file" />
      <h3>Using a default image</h3>
      <BlipCard title="Some Title" smallTitle="Some small" />
      <h2>Lot of Cards</h2>
      <BlipCardContainer>
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
        <BlipCard title="Some Title" smallTitle="Some small" />
      </BlipCardContainer>
      <h2>Inputs </h2>
      <BlipInputReact />
      <h2>Loading</h2>
      <BlipLoading />
      <h2>Header</h2>
      <PageHeader>Some text in Header</PageHeader>
      some text to complete the blank space
    </>
  );
}

export default App;
