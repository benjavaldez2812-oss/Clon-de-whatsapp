import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          {/* Página 1: Lista de chats */}
          <Route path="/" element={<ChatPage />} />
          {/* Página 2: Chat abierto con contacto (usa useParams :contactId) */}
          <Route path="/chat/:contactId" element={<ChatPage />} />
          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;
