import type { User, Message } from '../types/types'

export const testUsers: User[] = [
  {
    id: 'user-1',
    username: 'alice',
    email: 'alice@example.com',
  },
  {
    id: 'user-2',
    username: 'bob',
    email: 'bob@example.com',
  },
  {
    id: 'user-3',
    username: 'carol',
    email: 'carol@example.com',
  },
  {
    id: 'user-4',
    username: 'dave',
    email: 'dave@example.com',
  },
]

// Messages between Alice and Bob
export const messagesAliceBob: Message[] = [
  {
    id: 'msg-1',
    senderId: 'user-1',
    recipientId: 'user-2',
    content: 'Hey Bob, how are you?',
    timestamp: '2025-06-11T10:00:00Z',
  },
  {
    id: 'msg-2',
    senderId: 'user-2',
    recipientId: 'user-1',
    content: 'Hi Alice! I am good, thanks. How about you?',
    timestamp: '2025-06-11T10:01:00Z',
  },
]

// Messages between Carol and Dave
export const messagesCarolDave: Message[] = [
  {
    id: 'msg-3',
    senderId: 'user-3',
    recipientId: 'user-4',
    content: 'Hey Dave, are you joining the meeting?',
    timestamp: '2025-06-11T10:02:00Z',
  },
  {
    id: 'msg-4',
    senderId: 'user-4',
    recipientId: 'user-3',
    content: 'Yes Carol, I will be there in 5 minutes.',
    timestamp: '2025-06-11T10:03:00Z',
  },
]

// Messages between Alice and Carol
export const messagesAliceCarol: Message[] = [
  {
    id: 'msg-5',
    senderId: 'user-1',
    recipientId: 'user-3',
    content: 'Carol, did you finish the report?',
    timestamp: '2025-06-11T10:04:00Z',
  },
  {
    id: 'msg-6',
    senderId: 'user-3',
    recipientId: 'user-1',
    content: 'Almost done, Alice. I will send it soon.',
    timestamp: '2025-06-11T10:05:00Z',
  },
]


