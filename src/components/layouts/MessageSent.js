import React from 'react'
import ChatbotProfile from '../../assets/logo.png'

const MessageSent = (props) => {
    return (
      <div className={'msg-row'}>
        <div className='msg-img'>
          <img src={ChatbotProfile} alt='user' width='30' height='30' />
        </div>  
        <div className='msg-text-receive'>
          <p>{props.messageContent.content}</p>
        </div>
      </div>
    )
}

export default MessageSent