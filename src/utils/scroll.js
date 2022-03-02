export default function scroll(messagesEndRef) {
  messagesEndRef.current.scroll({
    top: messagesEndRef.current.scrollHeight,
    behavior: 'smooth',
  })
}