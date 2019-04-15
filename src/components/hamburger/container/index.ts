import styled from 'styled-components';

import { MOBILE } from '../../../constants';

const Container = styled('div')`
  display: none;
  ${MOBILE} {
    bottom: 5px;
    right: 5px;
    position: fixed;
    display: block;
  }
`;

export { Container };
export default Container;
