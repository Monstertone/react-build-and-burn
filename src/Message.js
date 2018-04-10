import React from 'react'

const Message = (props) => {
  //here each item that was mapped in MessageList.js will be inserted into this template and displayed on the MessageList component
  return (
    <div>
      <div className="single-message-card">
        <b>By:</b> {props.singleMessage.author}<br />
        <b>Title:</b> {props.singleMessage.title}<br />
        <b>Posted:</b> {props.singleMessage.date}<br />
        <hr />
        {props.singleMessage.content}
      </div>
    </div>
  )
}

export default Message
