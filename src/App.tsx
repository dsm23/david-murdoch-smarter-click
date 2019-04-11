import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { BodyContainer } from './components/body-container';
import { FlexWrapper } from './components/flex-wrapper';
import { FormAddUser } from './components/form-add-user';
import { ImagePreviewer } from './components/pages/image-previewer';
import { SideBar } from './components/side-bar';

import { items } from './items';

const App: React.FC<{}> = () => (
  <Router>
    <FlexWrapper>
      <SideBar />
      <BodyContainer>
        <div className="container-fluid">
          <Route exact path="/" component={FormAddUser} />
          <Route
            path="/image-previewer"
            render={() => <ImagePreviewer items={items} />}
          />
        </div>
      </BodyContainer>
    </FlexWrapper>
  </Router>
);

export default App;
