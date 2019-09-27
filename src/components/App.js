import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import MenuBar from './Menu'
import Home from './Home'
import Events from './Events'
import About from './About'
import News from './News'
import Contact from './Contact'


const App = () => {
  return (
    <div className="ui container">
    <Router history={history}>
      <Container>
      <div>
      <header className="App-header">WizardAmigos Taipei</header>
        <MenuBar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/events" component={Events} />
            <Route exact path="/about" component={About} />
            <Route exact path="/news" component={News} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
        </div>
      </Container>
    </Router>
    </div>
  )
}

export default App
