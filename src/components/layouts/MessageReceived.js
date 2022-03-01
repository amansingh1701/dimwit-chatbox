import React from 'react'
// import female from '../../assets/female.png'

const MessageReceived = (props) => {
    return (
      <div className='msg-row msg-row2'>
        <div className='msg-text-send'>
          <p>{props.messageContent.content}</p>
        </div>
      </div>
    )
}

export default MessageReceived