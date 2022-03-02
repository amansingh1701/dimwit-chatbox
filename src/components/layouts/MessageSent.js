import React from 'react'
import ChatbotProfile from '../../assets/robot-logo-white.png'

const MessageSent = (props) => {
  return (
    <div className={'msg-row'}>
      <div className='msg-img'>
        <img
          style={{
            borderRadius: '100px',
            background: '#859FFE',
            padding: '1px',
          }}
          src={ChatbotProfile}
          alt='user'
          width='40'
          height='40'
        />
      </div>
      {props.messageContent.type === 'image' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            gap: '2px',
          }}
        >
          <img
            style={{ height: '250px', width: '250px' }}
            src={props.messageContent.file}
            alt={props.messageContent.fileName}
          />
          <small
            style={{
              color: '#436bff',
              fontSize: '0.7rem',
              textAlign: 'right',
            }}
          >
            {new Date(props.messageContent.createdAt).toLocaleTimeString('en', {
              timeStyle: 'short',
              hour12: true,
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            })}
          </small>
        </div>
      ) : (
        <div className='msg-text-receive'>
          <div style={{ position: 'relative' }}>
            <p>{props.messageContent.content}</p>
            <small
              style={{
                position: 'absolute',
                right: '0',
                color: '#436bff',
                fontSize: '0.7rem',
              }}
            >
              {new Date(props.messageContent.createdAt).toLocaleTimeString(
                'en',
                {
                  timeStyle: 'short',
                  hour12: true,
                  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                }
              )}
            </small>
          </div>
        </div>
      )}
    </div>
  )
}

export default MessageSent