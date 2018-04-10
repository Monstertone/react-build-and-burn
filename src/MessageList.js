import React from 'react'
//importing the component for a single message
import Message from './Message'

const MessageList = (props) => {
  //here we are mapping over the props (state from App.js) and then passing each item down to Message.js
  let messageMap = props.allMessages.reverse().map((item, idx) => {
    return <Message key="idx" singleMessage={item}/>
  })
  return (
    <div className="message-list">
      {messageMap}
    </div>
  )
}


export default MessageList
