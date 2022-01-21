import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

// styles
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/paper-kit.scss?v=1.3.0'
import './assets/demo/demo.css?v=1.3.0'

import MainPage from './pages/MainPage'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <MainPage {...props} />} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

