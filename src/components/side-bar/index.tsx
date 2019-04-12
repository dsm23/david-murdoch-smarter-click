import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {
  faChartArea,
  faChevronDown,
  faTable,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFolder,
  faImages,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

import '../../assets/scss/sb-admin.scss';

import { ROUTER } from '../../constants';

const SideBarForRouter = ({ location: { pathname } }: RouteComponentProps) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const handleToggle = () => setDropDownOpen(!isDropDownOpen);
  return (
    <ul className="sidebar navbar-nav">
      <li className={cn('nav-item', { active: ROUTER.HOME === pathname })}>
        <Link className="nav-link" to={ROUTER.HOME}>
          <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
        </Link>
      </li>
      <li className={cn('nav-item', { active: ROUTER.ADD_USER === pathname })}>
        <Link className="nav-link" to={ROUTER.ADD_USER}>
          <FontAwesomeIcon icon={faUser} /> <span>Add User</span>
        </Link>
      </li>
      <li
        className={cn('nav-item', {
          active: ROUTER.IMAGE_PREVIEWER === pathname,
        })}
      >
        <Link className="nav-link" to={ROUTER.IMAGE_PREVIEWER}>
          <FontAwesomeIcon icon={faImages} /> <span>Image Previewer</span>
        </Link>
      </li>
    </ul>
  );
};

export const SideBar = withRouter(SideBarForRouter);
export default withRouter(SideBarForRouter);
