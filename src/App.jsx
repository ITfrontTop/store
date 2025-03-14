import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import styles from './App.module.css';
import Tile from './components/Tile/Tile';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Slider />
      <Tile />
    </div>
  );
}

export default App;
