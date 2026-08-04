import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { getLastMessage } from '../../data/mockData';
import { useChat } from '../../context/ChatContext';

export default function ChatItem({ contact }) {
  const { conversations } = useChat();
  const lastMsg = getLastMessage(conversations, contact.id);

  const initials = contact.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <NavLink
      to={`/chat/${contact.id}`}
      className={({ isActive }) =>
        `${styles.chatItem} ${isActive ? styles.active : ''}`
      }
      aria-label={`Chat con ${contact.name}`}
    >
      <div className={styles.avatar} aria-hidden="true">
        <span>{initials}</span>
      </div>
      <div className={styles.info}>
        <div className={styles.topRow}>
          <span className={styles.name}>{contact.name}</span>
          <span className={styles.time}>{lastMsg.time}</span>
        </div>
        <div className={styles.bottomRow}>
          <span className={styles.lastMessage}>
            {lastMsg.fromMe && (
              <svg width="16" height="11" viewBox="0 0 16 11" className={styles.checkIcon} aria-hidden="true">
                <path fill="currentColor" d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.046.249.14.337l2.995 2.83a.63.63 0 0 0 .448.196c.203 0 .375-.104.514-.311l6.636-8.2a.446.446 0 0 0 .109-.3.443.443 0 0 0-.14-.313l-.292-.226z"/>
              </svg>
            )}
            {lastMsg.text}
          </span>
          {contact.unread > 0 && (
            <span className={styles.badge}>{contact.unread}</span>
          )}
        </div>
      </div>
    </NavLink>
  );
}
