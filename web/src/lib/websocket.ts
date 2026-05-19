import { io, Socket } from 'socket.io-client'
import { WS_URL } from './constants'

let socket: Socket | null = null

export function getSocket(): Socket {
  if (!socket) {
    socket = io(WS_URL, { transports: ['websocket'] })
  }
  return socket
}

export function disconnectSocket(): void {
  socket?.disconnect()
  socket = null
}
