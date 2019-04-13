import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import 'hamburgers/_sass/hamburgers/hamburgers.scss';

type Props = {
  animation: string,
  isActive: boolean,
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
};

const Icon = ({ animation, isActive, onClick }: Props) => (
  <button
    className={cn('hamburger', `hamburger--${animation}`, {
      'is-active': isActive,
    })}
    type="button"
    onClick={onClick}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </button>
);

Icon.defaultProps = {
  animation: 'squeeze',
  isActive: false,
};

Icon.propTypes = {
  animation: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export { Icon };
export default Icon;
