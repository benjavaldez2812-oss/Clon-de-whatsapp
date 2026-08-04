import { createContext, useContext, useState, useCallback } from 'react';
import { contacts as initialContacts, initialConversations } from '../data/mockData';

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({ name: 'Mi Usuario', avatar: null });
  const [contacts] = useState(initialContacts);
  const [conversations, setConversations] = useState(initialConversations);

  const sendMessage = useCallback((contactId, text) => {
    const newMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      fromMe: true,
    };

    setConversations((prev) => ({
      ...prev,
      [contactId]: [...(prev[contactId] || []), newMessage],
    }));
  }, []);

  const login = useCallback((name) => {
    setCurrentUser({ name, avatar: null });
  }, []);

  const value = {
    currentUser,
    contacts,
    conversations,
    sendMessage,
    login,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
