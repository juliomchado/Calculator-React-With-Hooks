import { useState } from 'react';
import { Display } from './components/Display';
import { Keyboard } from './components/Keyboard';
import styles from './styles.module.scss';

function App() {
  const [displayValue, setDisplayValue] = useState(0);

  const clearDisplay = () => {
      setDisplayValue(0);
  }


  return (
    <main className={styles.main}>
      <Display  value={displayValue}/>
      <Keyboard clearFunction={clearDisplay} />
    </main>
  )
}

export default App
