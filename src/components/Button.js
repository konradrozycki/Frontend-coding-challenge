import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withDelay from './withDelay';
import { fadeIn } from '../styles/animations';

const Wrapper = styled.button`
  background: none;
  border: 1px solid #111;
  box-shadow: none;
  color: #111;
  cursor: pointer;
  font-family: 'Alegreya', serif;
  font-size: 2em;
  margin: 2em 0.5em;
  opacity: 0.8;
  outline: none;
  padding: 0 1em;

  animation: 0.8s ${fadeIn} ease-in-out;
`;

const Button = ({ handleClick, text }) => (
  <Wrapper onClick={handleClick}>{text}</Wrapper>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default withDelay(Button);
