import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import MenuBar from './Menu'
import Home from './Home'
import Events from './Events'
import News from './News'
import Contact from './Contact'

const App = () => {
  return (
    <Container>
      <header className="App-header">WizardAmigos Taipei</header>
<<<<<<< HEAD
        <MenuBar />
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/events" exact component={Events} />
          <Route path="/news" exact component={News} />
          <Route path="/contact" exact component={Contact} />
        </Router>
=======
      <Menu />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={Events} />
        <Route path="/news" exact component={News} />
        <Route path="/contact" exact component={Contact} />
      </Router>
>>>>>>> 39a8ebc75ad3bd3aca9e4f6b2d972de9efa15091
    </Container>
  )
}

export default App
