import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useAuth from './hooks/useAuth'
import Login from './components/Login'
import Chat from './components/Chat'

function App() {
  const { user, email, password, error, loading, setEmail, setPassword, login, clear } = useAuth()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (error) { alert(error); clear() }
  }, [ error ])

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {!user && <Login {...{email, password, setEmail, setPassword, login}} />}
      {user && <Chat email={user.email!} uid={user.uid} />}
    </div>
  )
}

export default App
