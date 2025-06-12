export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Message {
  id: string;
  senderId: string;
  recipientId?: string;
  roomId?: string;
  content: string;
  timestamp: string;
}