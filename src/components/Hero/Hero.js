import React from 'react';
import styled from 'styled-components/macro';

const HERO_IMAGE_PATH = '/images/hero-img.jpg';
const HERO_IMAGE_ALT =
  'An example of the photos distributed through this site (blue-eyed brown short-haired cat glaring out of pitch black darkness)';

const Hero = () => {
  return (
    <Wrapper>
      <picture alt={HERO_IMAGE_ALT}>
        <source
          type='image/avif'
          srcSet={`
            ${HERO_IMAGE_PATH.replace('.jpg', '.avif')} 1x,
            ${HERO_IMAGE_PATH.replace('.jpg', '@2x.avif')} 2x,
            ${HERO_IMAGE_PATH.replace('.jpg', '@3x.avif')} 3x
          `}
        />
        <source
          type='image/jpeg'
          srcSet={`
            ${HERO_IMAGE_PATH} 1x,
            ${HERO_IMAGE_PATH.replace('.jpg', '@2x.jpg')} 2x,
            ${HERO_IMAGE_PATH.replace('.jpg', '@3x.jpg')} 3x
          `}
        />
        <HeroImage src='/images/hero-img.jpg' alt={HERO_IMAGE_ALT} />
      </picture>
      <Swoop src='/swoop.svg' alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
