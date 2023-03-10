import './App.css';
import React from 'react';
import { Image, Divider, Header, Icon, Button,Grid} from 'semantic-ui-react'

import Comments from './comment.js'

import hr from "./hr.jpeg"



function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src = {hr} centered />
        </Grid.Row>
        <Grid.Row>
          <Button
            color='red'
            content='Like'
            icon='heart'
            label={{ basic: true, color: 'red', pointing: 'left', content: '0' }}
          />
          <Button
            basic
            color='blue'
            content='Shere'
            icon='fork'
            label={{
              as: 'a',
              basic: true,
              color: 'blue',
              pointing: 'left',
              content: '0',
            }}
          />
        </Grid.Row>
      </Grid>
      <br />
      <Divider horizontal>
        <Header as = 'h4'>
          <Icon name = 'comment alternate'/>
            댓글을 달아주세요!
        </Header>
      </Divider>
      <Comments />
      <Divider horizontal>
        <Header as = 'h4'>
          <Icon name = 'microchip'/>
            Contact Me
        </Header>
      </Divider>
      <br />
      <div>
        <Grid centered>
          <Button circular color='facebook' icon='facebook' />
          <Button circular color='twitter' icon='twitter' />
          <Button circular color='youtube' icon='youtube' />
          <Button circular color='google plus' icon='google plus' />
        </Grid>
      </div>
  </div>
  )
}

export default App;
