import styled from '@emotion/styled'

export const SentMessage = styled.div`
  overflow-y: scroll;
  div.msg-row {
    display: flex;
    margin: 10px;
    @media (max-width: 1000px) {
      margin: 20px 0;
    }
  }
  div.msg-row2 {
    justify-content: flex-end;
    margin: 0 6px;
  }
  div.msg-text-receive {
    color: #000;
    // color: #3874c9;
    // background: #fff;
    background: #dee6ff;
    padding: 20px 20px;
    border-radius: 0 20px 20px 20px;
    flex-basis: 70%;
    font-weight: 300;
  }
  div.msg-text-send {
    color: #fff;
    background: #436bff;
    // background: rgba(255, 255, 255, 0.1);
    padding: 20px 20px;
    border-radius: 20px 0 20px 20px;
    flex-basis: 70%;
    font-weight: 300;
  }
  div.msg-text > h2 {
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 10px;
  }

  div.msg-img {
    border-radius: 50%;
    margin: 0 6px;
  }
`

export const ChatBox = styled.div`
  justify-content: space-between;
  div.send-message {
    padding: 0 10px 20px 10px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      position: absolute;
      right: 20px;
      cursor: pointer;
    }
    textarea {
      display: block;
      border: 0;
      outline: none;
      padding: 20px 10px;
      background: #e8eaf4;
      color: #000;
      width: 100%;
      font-size: 16px;
      font-weight: 300;
      ::placeholder {
        color: #000;
      }
    }
  }
  background: #f7f6f4;
  // background: #1d61c2;
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
