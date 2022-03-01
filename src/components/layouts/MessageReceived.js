import React from 'react'
import male from '../../assets/maleUser.png'
// import female from '../../assets/female.png'

const MessageReceived = (props) => {
    return (
      <div className='msg-row msg-row2'>
        <div className='msg-text-send'>
          <p>{props.messageContent.content}</p>
        </div>
        <div className='msg-img'>
          <img src={male} alt='user' width='30' height='30' />
        </div>
      </div>
    )
}

export default MessageReceived