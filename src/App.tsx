import { useState } from 'react'
import './App.css'
// msal
import { useMsal, useIsAuthenticated } from '@azure/msal-react'
import { loginRequest } from './authConfig'
import { getMsGraphMe } from './services/service'

import { MsGraphMeResponse } from './types/MsGraphMeResponse'

export const App = () => {
  const { instance, accounts } = useMsal()
  const isAuthenticated = useIsAuthenticated()
  const [graphData, setGraphData] = useState<MsGraphMeResponse | null>(null)
  const handleLogin = () => {
    instance.loginRedirect(loginRequest)
  }
  const handleLogout = () => {
    instance.logoutRedirect()
  }
  const handleGetMe = () => {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        getMsGraphMe(response.accessToken).then((data) => {
          console.log(data.data)
          setGraphData(data.data)
        })
      })
  }
  return (
    <>
      {isAuthenticated ? (
        <>
          <p>'認証済み！'</p>
          <button onClick={() => handleLogout()}>ログアウト</button>
          <button onClick={() => handleGetMe()}>GETME!</button>
          {graphData ? (
            <div>
              <p>{graphData.displayName}</p>
              <p>{graphData.surname}</p>
              <p>{graphData.givenName}</p>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <p>'未認証'</p>
          <button onClick={() => handleLogin()}>ログイン</button>
        </>
      )}
    </>
  )
}

export default App
