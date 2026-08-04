import { useEffect, useRef } from 'react';
import MessageBubble from '../MessageBubble';
import styles from './styles.module.css';

export default function MessageList({ messages }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <main className={styles.messageList} role="log" aria-label="Mensajes del chat">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={endRef} />
    </main>
  );
}
