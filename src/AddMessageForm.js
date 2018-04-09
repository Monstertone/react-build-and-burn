import React, {Component} from 'react'

class AddMessageForm extends Component {

  state = {author:'', title:'', content:''}

  handleAuthorChange = (event) => {
    this.setState({author:event.target.value})
  }
  handleTitleChange = (event) => {
    this.setState({title:event.target.value})
  }
  handleContentChange = (event) => {
    this.setState({content:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateState({author:this.state.author, title:this.state.title, date:Date(Date.now()).toString(), content: this.state.content})
    this.setState({author:'', title:'', content:''})
  }

  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input className="form-control post-field" type="text" onChange={this.handleAuthorChange} placeholder="Author"/>
          <input className="form-control post-field" type="text" onChange={this.handleTitleChange} placeholder="Title" />
          <textarea className="form-control post-field" type="text" onChange={this.handleContentChange} placeholder="Content"/>
          <button type="submit" className="form-control btn btn-success">Post Message</button>
        </form>
      </div>
    )
  }
}

export default AddMessageForm
