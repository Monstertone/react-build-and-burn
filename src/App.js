import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import AddMessageForm
import AddMessageForm from './AddMessageForm'
//import MessageList
import MessageList from './MessageList'

//this component is stateful so it uses a class component
class App extends Component {

  //set state to an empty array so we can concat changes later
  state = {messages:[

  ]}

  //function to update state... reference to this function will be passed down through props to AddMessageForm. State from AddMessageForm is passed in as newMessage when the function is invoked.
  updateState = (newMessage) => {
    console.log("newMessage", newMessage)
    this.setState({messages: this.state.messages.concat(newMessage)})
  }

  render() {

    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="logo" href="#">Messages</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav mr-auto">
              </ul>
            </div>
          </nav>
        </header>

        {/*here we add the AddMessageForm component and pass a reference to the updateState function as props*/}
        <AddMessageForm updateState={this.updateState} />
        {/*here we add the MessageList component and pass state as props*/}
        <MessageList allMessages={this.state.messages} />
      </div>


    );
  }
}

export default App;
