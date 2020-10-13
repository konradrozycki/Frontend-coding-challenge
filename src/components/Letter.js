import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withDelay from './withDelay';
import { slideUp } from '../styles/animations';

const Wrapper = styled.span`
  position: relative;

  animation: 0.7s ${slideUp} ease-out;
`;

const Letter = ({ character }) => (
  <Wrapper>{character}</Wrapper>
);

Letter.propTypes = {
  character: PropTypes.string.isRequired
};

export default withDelay(Letter);
