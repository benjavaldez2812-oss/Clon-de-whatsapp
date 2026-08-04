import { useChat } from '../../context/ChatContext';
import SearchBar from '../SearchBar';
import ChatList from '../ChatList';
import styles from './styles.module.css';

export default function Sidebar() {
  const { currentUser } = useChat();

  return (
    <aside className={styles.sidebar} aria-label="Panel de chats">
      <header className={styles.header}>
        <h1 className={styles.title}>WhatsApp</h1>
        <div className={styles.userInfo}>
          {currentUser && (
            <span className={styles.userName}>{currentUser.name}</span>
          )}
        </div>
      </header>
      <SearchBar />
      <ChatList />
    </aside>
  );
}
