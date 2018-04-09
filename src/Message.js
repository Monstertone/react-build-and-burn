import React from 'react'

const Message = (props) => {
  console.log("HAHAH", props.singleMessage)
  return (
    <div>
      <div className="single-message-card">
        <b>By:</b> {props.singleMessage.author}<br />
        <b>Title:</b> {props.singleMessage.title}<br />
        <hr />
        {props.singleMessage.content}
      </div>
    </div>
  )
}

export default Message
