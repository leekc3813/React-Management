import './App.css';
import React from 'react';
import { Image } from 'semantic-ui-react'
import Comments from './comment.js'

import hr from "./hr.jpeg"
import human from "./people.jpg"



function App() {
  return (
    <div>
      <Image src = {hr} centered />
      <Comments />
  </div>
  )
}

export default App;
