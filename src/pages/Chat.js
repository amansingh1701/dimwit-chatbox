/** @jsxImportSource @emotion/react */
import React from 'react'
import { ChatBox, SentMessage } from '../components/Styles/Chat.styles'
import InputMessage from '../components/layouts/InputMessage'
import MessageReceived from '../components/layouts/MessageReceived'
import MessageSent from '../components/layouts/MessageSent'
import Header from '../components/layouts/Header'

const Chat = () => {
  const [messageData, setMessageData] = React.useState(
    JSON.parse(localStorage.getItem('messageData') || '[]')
  )
  const messagesEndRef = React.useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scroll({
      top: messagesEndRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }

  const handleAdd = (messageDetails, messageDetailsBot) => {
    if (messageData.length === 1) {
      messageDetailsBot.content = `What's up? ${messageDetails.author}`
      messageDetailsBot.type = 'message'
      setMessageData([...messageData, messageDetails, messageDetailsBot])
    } else setMessageData([...messageData, messageDetails, messageDetailsBot])
  }

  // const handleRemove = (todo) => {
  //   const newTodos = messageData.filter((t) => t !== todo)
  //   setMessageData(newTodos)
  // }

  // const handleUpdate = (index, todo) => {
  //   const newTodos = [...messageData]
  //   newTodos[index] = todo
  //   setMessageData(newTodos)
  // }

  const cachedData = JSON.parse(localStorage.getItem('messageData'))
  if (!cachedData?.length) {
    let initialMessage = {
      ID: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      content: 'Hello,What is your name?',
      author: 'ChatBot',
      type: 'name',
      deletedAt: null,
      file: '',
      fileName: '',
      externalLinks: '',
    }
    messageData.push(initialMessage)
  }

  React.useEffect(() => {
    if (messageData)
      localStorage.setItem('messageData', JSON.stringify(messageData))
    scrollToBottom()
  }, [messageData])

  // const clearStorage = React.useCallback(() => {
  //   localStorage.clear()
  // }, [])

  function handleIncomingMessage(ID, content, author, type) {
    let messageDetails = {
      ID: ID,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      content: content,
      author: author,
      type: type,
      deletedAt: null,
      file: '',
      fileName: '',
      externalLinks: '',
    }
    let messageDetailsBot = {
      ID: Math.random().toString(36).slice(2),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      content: content,
      author: 'ChatBot',
      type: type,
      deletedAt: null,
      file: '',
      fileName: '',
      externalLinks: '',
    }
    handleAdd(messageDetails, messageDetailsBot)
  }

  return (
    <ChatBox>
      <Header handle={handleIncomingMessage} />
      <SentMessage ref={messagesEndRef}>
        {messageData?.map((obj, index) => {
          if (obj.author === 'ChatBot')
            return <MessageSent messageContent={obj} index={index} />
          else return <MessageReceived messageContent={obj} index={index} />
        })}
      </SentMessage>
      <InputMessage messageData={messageData} handle={handleIncomingMessage} />
    </ChatBox>
  )
}

export default Chat
