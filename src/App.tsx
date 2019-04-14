import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Sidebar from 'react-sidebar';
import { useWindowSize } from 'the-platform';

import './App.css';

import { PageAddUser } from './components/pages/add-user';
import { ImagePreviewer } from './components/pages/image-previewer';
import { PageHome } from './components/pages/home';
import { Header } from './components/header';
import { SideBar as SideBarContent } from './components/side-bar';

import {
  Container as HambugerContainer,
  Icon as HamburgerIcon,
} from './components/hamburger';

import { ContextUsers } from './contexts';

import { initialUsers, HEADER_HEIGHT, ROUTER, THEME } from './constants';

import { useAddUser } from './hooks';

import { items } from './items';

const App: React.FC<{}> = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  const handleSideBarOpen = (newValue: boolean) => setOpen(newValue);

  const handleClick = () => setOpen(!open);
  return (
    <Router>
      <Header />
      <Sidebar
        sidebar={<SideBarContent onClick={handleClick} />}
        open={open}
        docked={width > 500}
        onSetOpen={handleSideBarOpen}
        styles={{
          content: {
            background: THEME.BACKGROUND_1,
            paddingTop: '15px',
            top: `${HEADER_HEIGHT}px`,
          },
          sidebar: { background: THEME.MAIN, top: `${HEADER_HEIGHT}px` },
        }}
      >
        <Container fluid>
          <ContextUsers.Provider
            value={useAddUser({
              users: [initialUsers],
            })}
          >
            <Route exact path={ROUTER.HOME} component={PageHome} />
            <Route path={ROUTER.ADD_USER} component={PageAddUser} />
            <Route
              path={ROUTER.IMAGE_PREVIEWER}
              render={() => <ImagePreviewer items={items} />}
            />
          </ContextUsers.Provider>
        </Container>
        <HambugerContainer>
          <HamburgerIcon isActive={open} onClick={handleClick} />
        </HambugerContainer>
      </Sidebar>
    </Router>
  );
};

export default App;
