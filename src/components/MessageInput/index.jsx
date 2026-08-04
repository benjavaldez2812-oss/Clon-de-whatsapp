import { useState } from 'react';
import styles from './styles.module.css';

export default function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // No envía el mensaje, solo permite escribir en el campo de texto
  };

  return (
    <form className={styles.inputBar} onSubmit={handleSubmit} aria-label="Enviar mensaje">
      <label htmlFor="message-input" className={styles.srOnly}>Escribe un mensaje</label>
      <input
        id="message-input"
        type="text"
        className={styles.input}
        placeholder="Escribe un mensaje..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoComplete="off"
      />
      <button
        type="submit"
        className={styles.sendBtn}
        aria-label="Enviar"
        disabled={!text.trim()}
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/>
        </svg>
      </button>
    </form>
  );
}
