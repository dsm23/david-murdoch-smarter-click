import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';

import { BodyContainer } from './components/body-container';
import { FlexWrapper } from './components/flex-wrapper';
import { FormAddUser } from './components/form-add-user';
import { ImagePreviewer } from './components/pages/image-previewer';
import { PageHome } from './components/pages/home';
import { SideBar } from './components/side-bar';

import { ContextUsers } from './contexts';

import { initialUsers } from './constants';

import { useAddUser } from './hooks';

import { items } from './items';

const App: React.FC<{}> = () => (
  <Router>
    <FlexWrapper>
      <SideBar />
      <BodyContainer>
        <Container fluid>
          <ContextUsers.Provider
            value={useAddUser({
              users: [initialUsers],
            })}
          >
            <Route exact path="/" component={PageHome} />
            <Route path="/add-user" component={FormAddUser} />
            <Route
              path="/image-previewer"
              render={() => <ImagePreviewer items={items} />}
            />
          </ContextUsers.Provider>
        </Container>
      </BodyContainer>
    </FlexWrapper>
  </Router>
);

export default App;
