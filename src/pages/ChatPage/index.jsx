import { useParams } from 'react-router-dom';
import IconBar from '../../components/IconBar';
import Sidebar from '../../components/Sidebar';
import ChatHeader from '../../components/ChatHeader';
import MessageList from '../../components/MessageList';
import MessageInput from '../../components/MessageInput';
import { useChat } from '../../context/ChatContext';
import styles from './styles.module.css';

export default function ChatPage() {
  const { contactId } = useParams();
  const { contacts, conversations, sendMessage } = useChat();

  const activeContact = contacts.find((c) => c.id === contactId) || null;
  const messages = contactId ? conversations[contactId] || [] : [];

  const handleSend = (text) => {
    if (contactId) {
      sendMessage(contactId, text);
    }
  };

  return (
    <div className={styles.layout}>
      <IconBar />
      <div className={`${styles.sidebarPanel} ${contactId ? styles.hideMobile : ''}`}>
        <Sidebar />
      </div>
      <div className={`${styles.chatPanel} ${!contactId ? styles.hideMobile : ''}`}>
        {activeContact ? (
          <>
            <ChatHeader contact={activeContact} />
            <MessageList messages={messages} />
            <MessageInput onSend={handleSend} />
          </>
        ) : (
          <div className={styles.emptyState}>
            <svg viewBox="0 0 303 172" width="250" className={styles.emptyIcon}>
              <path
                fill="var(--wa-green-dark)"
                opacity="0.15"
                d="M229.565 160.229c32.647-16.166 55.479-51.955 53.884-87.231C279.905 22.075 234.884-6.665 183.8 1.429c-42.779 6.793-79.249 37.118-99.474 74.754-14.106 26.262-20.972 58.774-8.809 86.63 8.154 18.674 24.478 32.563 42.564 41.906 28.194 14.558 63.154 15.3 91.862 2.248 5.697-2.593 10.268-12.06 19.622-6.738z"
              />
              <path
                fill="var(--wa-green-dark)"
                opacity="0.3"
                d="M131.589 68.942a24.893 24.893 0 0 0-7.058-1.63c-3.654-.313-7.382.293-10.718 1.912-2.538 1.232-4.805 3.07-6.37 5.49-1.563 2.42-2.357 5.41-1.903 8.282.347 2.198 1.458 4.18 2.872 5.885 2.842 3.424 6.88 5.758 11.087 7.105 4.207 1.348 8.646 1.773 13.046 1.882"
              />
            </svg>
            <h2 className={styles.emptyTitle}>WhatsApp Web</h2>
            <p className={styles.emptyText}>
              Seleccioná un chat de la lista para comenzar a conversar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
