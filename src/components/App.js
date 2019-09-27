import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Container } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'

// import Layout from '../layouts'
// import M from '../components/m'
function App() {
  async function getData() {
    const { data } = await axios.get(
      'https://okz.moe/wizardamigos/wp-json/menus/v1/menus/2'
    )
    console.log(data)
  }
  getData()
  return <div>Hello world</div>
}

export default App
