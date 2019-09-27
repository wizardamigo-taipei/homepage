import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Menu from './Menu'
import Home from './Home'
import Events from './Events'
import News from './News'
import Contact from './Contact'

function App() {
  return (
    <Container>
      <header className="App-header">WizardAmigos Taipei</header>
      <Menu />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={Events} />
        <Route path="/news" exact component={News} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </Container>
  )
}

export default App
