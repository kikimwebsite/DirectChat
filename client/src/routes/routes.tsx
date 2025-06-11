import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import ChatRoom from '../components/ChatRoom'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat/:roomId" element={<ChatRoom />} />
    </Routes>
  )
}