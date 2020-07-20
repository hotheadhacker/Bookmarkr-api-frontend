import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bookmark from './components/Bookmark';
import View from './components/View';

function App() {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navbar />

          <Route exact path='/' component={Bookmark} />
          <section className='container'>
            <Switch>
              <Route exact path='/view' component={View} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
