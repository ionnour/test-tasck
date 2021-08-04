import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>

  )
}

export default App