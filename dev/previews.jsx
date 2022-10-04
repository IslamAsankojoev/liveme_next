import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import BannerSection from "../components/Home/BannerSection";
import Footer from "../components/Footer";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Cart">
        <Cart />
      </ComponentPreview>
      <ComponentPreview path="/BannerSection">
        <BannerSection />
      </ComponentPreview>
      <ComponentPreview path="/Footer">
        <Footer />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
