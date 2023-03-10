import './App.css';
import React from 'react';
import {Input,Button} from 'semantic-ui-react';
import hr from "./hr.jpeg"

function Login2() {
    return(
      <div>
        <Input />
        <Button onClick={(e) => 
          {alert(e.target.value)}}>
            로그인!</Button>
      </div>
    )
  }
  
  class Login extends React.Component {
    constructor() {
      super()
      this.state = {id: "아무것도 입력 x"}
    }
  
    render() {
      return(
        <div>
        <Input onChange={(e) => this.setState({id: e.target.value})}/>
        <Button  onClick={(event) => 
          {alert(this.state.id)}}>
          Login</Button>
      </div>
      )
    }
  }