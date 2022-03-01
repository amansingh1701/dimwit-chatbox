import styled from '@emotion/styled'

export const SentMessage = styled.div`
  overflow-y: auto;
  div.msg-row {
    display: flex;
    align-items: center;
    margin: 40px;
  }
  div.msg-row2 {
    justify-content: flex-end;
  }
  div.msg-text-receive {
    color: #3874c9;
    background: #fff;
    padding: 20px 40px;
    border-radius: 30px 30px 30px 0;
    flex-basis: 70%;
    font-weight: 300;
  }
  div.msg-text-send {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px 40px;
    border-radius: 30px 30px 0 30px;
    flex-basis: 70%;
    font-weight: 300;
  }
  div.msg-text > h2 {
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 10px;
  }

  div.msg-img {
    height: 0px;
    border-radius: 50%;
    margin: 0 6px;
  }
`

export const ChatBox = styled.div`
  justify-content: space-between;
  div.send-message {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      position: absolute;
      right: 10px;
      cursor: pointer;
    }
    input {
      display: block;
      border: 0;
      outline: none;
      padding: 20px 40px;
      background: #3874c9;
      color: #fff;
      width: 100%;
      font-size: 16px;
      font-weight: 300;
      ::placeholder {
        color: #fff;
      }
    }
  }
  background: #1d61c2;
  width: 60%;
  height: 80%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`
