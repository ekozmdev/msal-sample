// import { useState } from 'react'
import './App.css'

// msal
import { useMsal, useIsAuthenticated } from '@azure/msal-react'
import { loginRequest } from './authConfig'

export const App = () => {
  const { instance } = useMsal()
  const isAuthenticated = useIsAuthenticated()
  const handleLogin = () => {
    instance.loginRedirect(loginRequest)
  }
  const handleLogout = () => {
    instance.logoutRedirect()
  }
  return (
    <>
      <p className="read-the-docs">
        {isAuthenticated ? '認証済み！' : '未認証'}
      </p>
      <button onClick={() => handleLogin()}>ログイン</button>
      <button onClick={() => handleLogout()}>ログアウト</button>
    </>
  )
}

export default App
