import React, {Component} from 'react'

//this component contains a form, therefore it is stateful and needs to be a class component
class AddMessageForm extends Component {

  //create a template for what state will accept
  state = {author:'', title:'', content:''}


//create onChange functions for each field in the form and then insert them as onChange attributes in the JSX below
  handleAuthorChange = (event) => {
    this.setState({author:event.target.value})
  }
  handleTitleChange = (event) => {
    this.setState({title:event.target.value})
  }
  handleContentChange = (event) => {
    this.setState({content:event.target.value})
  }

//this event handler prevent page from refreshing on submit and then captures the current state of this component and passes it to the updateState function in App.js. We then reset the fields.
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateState({author:this.state.author, title:this.state.title, date:Date(Date.now()).toString(), content: this.state.content})
    this.refs.author.value = ''
    this.refs.title.value = ''
    this.refs.content.value = ''
  }

  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input ref="author" className="form-control post-field" type="text" onChange={this.handleAuthorChange} placeholder="Author" />
          <input ref="title" className="form-control post-field" type="text" onChange={this.handleTitleChange} placeholder="Title" />
          <textarea ref="content" className="form-control post-field" type="text" onChange={this.handleContentChange} placeholder="Content"/>
          <button type="submit" className="form-control btn btn-success">Post Message</button>
        </form>
      </div>
    )
  }
}

export default AddMessageForm
