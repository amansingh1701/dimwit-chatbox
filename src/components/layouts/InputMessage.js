import React from 'react'
import send from '../../assets/send.png'

const InputMessage = (props) => {
  const [message, setMessage] = React.useState('')

  const handleUserInput = (e) => {
    setMessage(e.target.value)
  }

  const resetInputField = () => {
    let name = ''
    let type='message'
    if (props.messageData.length > 1) {
      name = props.messageData[1].author
      type='message'
    } else {
      name = message
      type = 'name'
    }
      if (message !== '') {
          props.handle(
              Math.random().toString(36).slice(2),
              message,
              name,
              type
          )
          setMessage('')
      }
  }

  return (
    <div className='send-message'>
      <input
        value={message} // Now input value uses local state
        onKeyPress={(e) => e.key === 'Enter' && resetInputField()}
        onChange={handleUserInput}
        type='text'
        placeholder='Type your message here.....'
      ></input>
      <img
        src={send}
        alt='user'
        width='30'
        height='30'
        onClick={resetInputField}
      />
    </div>
  )
}

export default InputMessage
