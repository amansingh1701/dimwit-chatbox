/** @jsxImportSource @emotion/react */
import React from 'react'
import { ChatBox, SentMessage } from '../components/Styles/Chat.styles'
import InputMessage from '../components/layouts/InputMessage'
import MessageReceived from '../components/layouts/MessageReceived'
import MessageSent from '../components/layouts/MessageSent'
import Header from '../components/layouts/Header'
import scroll from '../utils/scroll'

const Chat = () => {
  const [messageData, setMessageData] = React.useState(
    JSON.parse(localStorage.getItem('messageData') || '[]')
  )
  const messagesEndRef = React.useRef(null)
  const scrollToBottom = () => {
    scroll(messagesEndRef)
  }

  const handleAdd = (messageDetails, messageDetailsBot) => {
    if (messageData.length === 1) {
      messageDetailsBot.content = `What's up, ${messageDetails.author}?`
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
  if (!cachedData?.length && !messageData.length) {
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
    }
    messageData.push(initialMessage)
  }

  React.useEffect(() => {
    if (messageData)
      localStorage.setItem('messageData', JSON.stringify(messageData))
    scrollToBottom()
  }, [messageData])

  const clearStorage = React.useCallback(() => {
    localStorage.clear();
    setMessageData([])
  }, [])

  function handleIncomingMessage(ID, content, author, type, file, fileName) {
    let messageDetails = {
      ID: ID,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      content: content,
      author: author,
      type: type,
      deletedAt: null,
      file: file,
      fileName: fileName,
    }
    let messageDetailsBot = {
      ID: Math.random().toString(36).slice(2),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      content: content,
      author: 'ChatBot',
      type: type,
      deletedAt: null,
      file: file,
      fileName: fileName,
    }
    handleAdd(messageDetails, messageDetailsBot)
  }

  return (
    <ChatBox>
      <Header handle={clearStorage} />
      <SentMessage ref={messagesEndRef}>
        {messageData?.map((message, index) => {
          if (message.author === 'ChatBot')
            return <MessageSent messageContent={message} index={index} />
          else return <MessageReceived messageContent={message} index={index} />
        })}
      </SentMessage>
      <InputMessage messageData={messageData} handle={handleIncomingMessage} />
    </ChatBox>
  )
}

export default Chat
