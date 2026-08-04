import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export default function ChatHeader({ contact }) {
  const navigate = useNavigate();

  const initials = contact.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <header className={styles.header}>
      <button
        className={styles.backBtn}
        onClick={() => navigate('/chat')}
        aria-label="Volver a la lista de chats"
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z"/>
        </svg>
      </button>
      <div className={styles.avatar} aria-hidden="true">
        <span>{initials}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.status}>{contact.lastSeen || 'Grupo'}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.iconBtn} aria-label="Buscar en el chat">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z"/></svg>
        </button>
        <button className={styles.iconBtn} aria-label="Más opciones">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"/></svg>
        </button>
      </div>
    </header>
  );
}
