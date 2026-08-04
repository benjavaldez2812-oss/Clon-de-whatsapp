import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <form className={styles.searchBar} role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="chat-search" className={styles.srOnly}>Buscar chat</label>
      <div className={styles.inputWrapper}>
        <svg className={styles.icon} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z"/>
        </svg>
        <input
          id="chat-search"
          type="text"
          className={styles.input}
          placeholder="Buscar o empezar un nuevo chat"
          value={query}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
    </form>
  );
}
