import * as React from 'react';
import { useState } from 'react';
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
import { faFolder } from '@fortawesome/free-regular-svg-icons';

// import Collapse from '@material-ui/core/Collapse';

import '../../assets/css/sb-admin.css';

const SideBar: React.FC<{}> = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const handleToggle = () => setDropDownOpen(!isDropDownOpen);
  return (
    <ul className="sidebar navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
        </a>
      </li>

      <Dropdown isOpen={isDropDownOpen} toggle={handleToggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="pagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faFolder} /> <span>Pages</span>
        </a>
        <FontAwesomeIcon icon={faChevronDown} />
        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
          <h6 className="dropdown-header">Login Screens:</h6>
          <a className="dropdown-item" href="login.html">
            Login
          </a>
          <a className="dropdown-item" href="register.html">
            Register
          </a>
          <a className="dropdown-item" href="forgot-password.html">
            Forgot Password
          </a>
          <div className="dropdown-divider" />
          <h6 className="dropdown-header">Other Pages:</h6>
          <a className="dropdown-item" href="404.html">
            404 Page
          </a>
          <a className="dropdown-item" href="blank.html">
            Blank Page
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <FontAwesomeIcon icon={faChartArea} /> <span>Charts</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <FontAwesomeIcon icon={faTable} /> <span>Tables</span>
        </a>
      </li>
    </ul>
  );
};

export { SideBar };
export default SideBar;
