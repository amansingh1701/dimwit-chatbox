import React from 'react'
import ChatbotProfile from '../../assets/robot-logo.png'
import Bin from '../../assets/trash-bin.png'

const Header = (props) => {
  return (
    <div
      style={{
        background: '#859FFE',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px',
      }}
    >
      <div
        style={{
          padding: '10px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          gap: '10px',
          cursor: 'pointer',
        }}
      >
        <img
          style={{
            borderRadius: '100px',
            background: '#fff',
            padding: '2px',
          }}
          src={ChatbotProfile}
          alt='user'
          width='50'
          height='50'
        />
        <h2>DimWit</h2>
      </div>
      <img
        style={{
          height: '35px',
          width: '35px',
          borderRadius: '100px',
          background: '#fff',
          padding: '4px',
          cursor: 'pointer',
        }}
        src={Bin}
        alt='cancel'
        onClick={props.handle}
      />
    </div>
  )
}

export default Header
