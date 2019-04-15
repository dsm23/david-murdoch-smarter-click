import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import image from '../../assets/img/smarterClick.png';

import { MOBILE, THEME } from '../../constants';

const List = styled('ul')({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: THEME.MAIN,
  top: 0,
  width: '100%',
  position: 'fixed',
  display: 'flex',
});

const ListItem = styled('li')({
  float: 'left',
  fontFamily: 'sans-serif',
  '& img': {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    [MOBILE]: {
      transform: 'scale(0.75)',
      transformOrigin: '0% 50%',
    },
  },
});

type Props = {
  altText: string,
  src: string,
};

const Header = ({ altText, src }: Props) => (
  <List>
    <ListItem>
      <img src={src} alt={altText} />
    </ListItem>
  </List>
);

Header.defaultProps = {
  altText: 'smarter click',
  src: image,
};

Header.propTypes = {
  altText: PropTypes.string,
  src: PropTypes.string,
};

export { Header };
export default Header;
