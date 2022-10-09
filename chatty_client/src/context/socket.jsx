import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000/", {
  auth: {
    token: localStorage.getItem('token')
  }
});

export const SocketContext = createContext();

export default function SocketContextProvider({ children }) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
