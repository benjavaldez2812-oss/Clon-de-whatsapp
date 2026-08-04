import { useSearchParams } from 'react-router-dom';
import ChatItem from '../ChatItem';
import { useChat } from '../../context/ChatContext';
import styles from './styles.module.css';

export default function ChatList() {
  const { contacts } = useChat();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className={styles.chatList} aria-label="Lista de chats">
      {filtered.length === 0 ? (
        <p className={styles.empty}>No se encontraron chats</p>
      ) : (
        filtered.map((contact) => (
          <ChatItem key={contact.id} contact={contact} />
        ))
      )}
    </nav>
  );
}
