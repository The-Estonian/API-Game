import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!loggedIn) {
      fetch('localhost:8080/connection');
    }
  });
  return (
    <div className={styles.container}>
      <span className={styles.title}>API GAME</span>
      {loggedIn && <div className={styles.gameWindow}></div>}
    </div>
  );
}

export default App;
