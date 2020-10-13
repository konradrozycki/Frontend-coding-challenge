import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Letter from './Letter';
import withDelay from './withDelay';

const DELAY = 30;

const Wrapper = styled.p`
  color: #111;
  font-family: 'Alegreya', serif;
  font-size: 4em;
  height: 1.3em;
  margin: 0;
  opacity: 0.8;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
`;

const Line = ({ delay, text }) => (
  <Wrapper>
    {text.split('').map((char, i) => (
      <Letter
        character={char}
        delay={delay + (DELAY * i)}
        key={i}
      />
    ))}
  </Wrapper>
);

Line.propTypes = {
  delay: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default withDelay(Line);
