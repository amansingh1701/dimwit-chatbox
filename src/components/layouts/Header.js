import React from 'react'
import ChatbotProfile from '../../assets/logo.png'

const Header = () => {
  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
              color: '#fff',
              gap:"10px"
      }}
    >
      <img src={ChatbotProfile} alt='user' width='50' height='50' />
      <h2>DimWit</h2>
    </div>
  )
}

export default Header
