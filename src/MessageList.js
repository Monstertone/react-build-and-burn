import React from 'react'
import Message from './Message'

const MessageList = (props) => {
  console.log("BLAH", props.allMessages)
  let messageMap = props.allMessages.map((item) => {
    return <Message singleMessage={item}/>
  })
  return (
    <div className="message-list">
      {messageMap}
    </div>
  )
}


export default MessageList
