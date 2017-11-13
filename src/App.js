import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import TaskContainer from './components/TaskContainer.js';

const App = () => (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Pomodoro</NavbarBrand>
        </Navbar>
        <TaskContainer />
      </div>
);

export default App;
