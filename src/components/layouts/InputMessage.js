import React from 'react'
import Send from '../../assets/send-theme2.png'
import Cross from '../../assets/close.png'
import Attachment from '../../assets/attachment-theme2.png'

const InputMessage = (props) => {
  const [message, setMessage] = React.useState("")
  const [imgData, setImgData] = React.useState(null)

  const handleUserInput = (e) => {
    setMessage(e.target.value)
  }
  const fileInput = React.useRef(null)

  const startUpload = () => {
    fileInput.current?.click?.()
  }
  const deleteImage = (e) => {
    setImgData(null)
  }

  const saveImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImgData(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const resetInputField = (e) => {
    e.preventDefault()
    let name = ""
    let type = "message"
    if (props.messageData.length > 1) {
      if (imgData) {
        name = props.messageData[1].author
        type = "image"
      } else {
        name = props.messageData[1].author
        type = "message"
      }
    } else {
      name = message
      type = "name"
    }
    if (type === "image") {
      props.handle(
        Math.random().toString(36).slice(2),
        message,
        name,
        type,
        imgData,
        `Uploaded_${Math.random().toString(36).slice(2)}`
      )
      setImgData(null)
      setMessage('')
    } else if (message !== '' && message.indexOf('\n') !== 0) {
      props.handle(
        Math.random().toString(36).slice(2),
        message,
        name,
        type,
        "",
        ""
      )
      setMessage("")
    }
  }

  return (
    <div className='send-message'>
      <textarea
        value={message}
        onKeyPress={(e) => {
          if (e.key === 'Enter') resetInputField(e)
        }}
        onChange={handleUserInput}
        type='text'
        placeholder={imgData ? '' : 'Message'}
        style={
          imgData
            ? {
                height: '220px',
              }
            : {
                height: '60px',
              }
        }
        disabled={imgData ? true : false}
      ></textarea>

      {imgData && (
        <div style={{ position: 'absolute', left: '280px', top: '10px' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={imgData}
              alt='uploadedImage'
              width='200px'
              height='200px'
            />
            <img
              style={{
                position: 'absolute',
                top: '8px',
                right: '16px',
                height: '25px',
                width: '25px',
                background: '#d1d4db',
                borderRadius: '100px',
                padding: '3px',
              }}
              src={Cross}
              alt='cancel'
              onClick={deleteImage}
            />
          </div>
        </div>
      )}
      <img
        src={Send}
        alt='user'
        width='30'
        height='30'
        onClick={resetInputField}
      />
      {!imgData && message === '' && props.messageData.length > 1 && (
        <>
          <img
            style={{ right: '60px' }}
            src={Attachment}
            alt='user'
            width='30'
            height='30'
            onClick={startUpload}
            disabled={true}
          />
          <input
            onChange={saveImage}
            ref={fileInput}
            name='image'
            id='image'
            style={{ display: 'none' }}
            accept='image/*'
            type='file'
            alt='uploadImage'
          ></input>
        </>
      )}
    </div>
  )
}

export default InputMessage
