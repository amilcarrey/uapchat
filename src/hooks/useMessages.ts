import { collection, onSnapshot, getFirestore, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../utils/firebase";

export interface Message {
  email: string
  content: string
}

const db = getFirestore(app)
const messagesCollection = collection(db, 'messages')
export default function useMessages() {
  const [list, setList] = useState<Message[]>([])

  useEffect(() => {
    onSnapshot(messagesCollection, (snap) => {
      setList(snap.docs.map(doc => doc.data() as Message))
    })
  }, [])

  function sendMessage(email: string, uid: string, content: string) {
    return addDoc(messagesCollection, { email, content, uid })
  }

  return { list, sendMessage }
}