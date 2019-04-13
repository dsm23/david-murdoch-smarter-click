import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faImages, faUser } from '@fortawesome/free-regular-svg-icons';

import '../../assets/scss/sb-admin.scss';

import { ROUTER, THEME } from '../../constants';

interface Props extends RouteComponentProps {
  onClick: any;
}

const SideBarForRouter = ({ location: { pathname }, onClick }: Props) => (
  <ul className="sidebar navbar-nav">
    <li
      className={cn('nav-item', { active: ROUTER.HOME === pathname })}
      onClick={onClick}
    >
      <Link className="nav-link" to={ROUTER.HOME}>
        <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
      </Link>
    </li>
    <li
      className={cn('nav-item', { active: ROUTER.ADD_USER === pathname })}
      onClick={onClick}
    >
      <Link className="nav-link" to={ROUTER.ADD_USER}>
        <FontAwesomeIcon icon={faUser} /> <span>Add User</span>
      </Link>
    </li>
    <li
      className={cn('nav-item', {
        active: ROUTER.IMAGE_PREVIEWER === pathname,
      })}
      onClick={onClick}
    >
      <Link className="nav-link" to={ROUTER.IMAGE_PREVIEWER}>
        <FontAwesomeIcon icon={faImages} /> <span>Image Previewer</span>
      </Link>
    </li>
  </ul>
);

export const SideBar = withRouter(SideBarForRouter);
export default withRouter(SideBarForRouter);
