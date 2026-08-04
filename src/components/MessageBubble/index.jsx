import styles from './styles.module.css';

export default function MessageBubble({ message }) {
  const bubbleClass = message.fromMe ? styles.sent : styles.received;

  return (
    <div className={`${styles.wrapper} ${message.fromMe ? styles.wrapperSent : styles.wrapperReceived}`}>
      <div className={`${styles.bubble} ${bubbleClass}`}>
        {message.sender && (
          <span className={styles.sender}>{message.sender}</span>
        )}
        <span className={styles.text}>{message.text}</span>
        <span className={styles.meta}>
          <span className={styles.time}>{message.time}</span>
          {message.fromMe && (
            <svg width="16" height="11" viewBox="0 0 16 11" className={styles.check} aria-hidden="true">
              <path fill="currentColor" d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.046.249.14.337l2.995 2.83a.63.63 0 0 0 .448.196c.203 0 .375-.104.514-.311l6.636-8.2a.446.446 0 0 0 .109-.3.443.443 0 0 0-.14-.313l-.292-.226z"/>
              <path fill="currentColor" d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.185-1.12.604-.744 1.065 1.007 6.636-8.2a.446.446 0 0 0 .109-.3.443.443 0 0 0-.14-.313l-.214-.042z"/>
            </svg>
          )}
        </span>
      </div>
    </div>
  );
}
