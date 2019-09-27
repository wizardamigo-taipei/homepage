import React, { useState, useEffect } from 'react'
import axios from 'axios'

const M = () => {
  const [data, setData] = useState()

  useEffect(async () => {
    const result = await axios(
      'https://okz.moe/wizardamigos/wp-json/menus/v1/menus/2'
    )
    console.log(result.data.items)
    setData(result.data.items)
  })
  return <div>{/* {data.map(item => item)} */}</div>
}

export default M
