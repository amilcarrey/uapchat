import { useState } from "react"
import useMessages from "../hooks/useMessages"

interface Props {
  email: string
  uid: string
}
export default function Chat({ email, uid }: Props) {
  const [message, setMessage] = useState('')
  const { list, sendMessage } = useMessages()

  function onEnter() {
    sendMessage(email, uid, message)
    setMessage('')
  }

  return (
    <div className="container flex flex-col h-full">
      <div className="messages grow">
        <ul>
          { list.map((msg, i) => <li key={i}>{msg.email}: {msg.content}</li>) }
        </ul>
      </div>
      <input
        placeholder="Mensaje"
        className="border-2 border-gray-400 px-2"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && onEnter()}
      />
    </div>
  )
}