import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
    <Router>
      <Container>
      <header className="App-header">WizardAmigos Taipei</header>
        <MenuBar />
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/events" exact component={Events} />
          <Route path="/about" exact component={About} />
          <Route path="/news" exact component={News} />
          <Route path="/contact" exact component={Contact} />
      </Switch>
      </Container>
    </Router>
  )
}

export default App
