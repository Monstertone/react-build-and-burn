import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AddMessageForm from './AddMessageForm'
import MessageList from './MessageList'


class App extends Component {

  state = {messages:[
    {author:'Michael', title:'Hello world', content:'Hello there world, this is some content'},
    {author:'Liz', title:'Dont forget', content:'Can you get some milk while youre at the grocery?'},
    {author:'Molly', title:'Ruff', content:'Ruff Ruff Ruff Ruff Ruff'},
  ]}

  updateState = (newMessage) => {
    console.log("newMessage", newMessage)
    this.setState({messages: this.state.messages.concat(newMessage)})
  }

  render() {
    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="logo" href="#">Messenger</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </header>

        <AddMessageForm updateState={this.updateState} />
        <MessageList allMessages={this.state.messages} />
      </div>


    );
  }
}

export default App;
