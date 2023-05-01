import { Header } from "./components/Header";

import './global.css';

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
        <Header></Header>
        <div className={styles.wrapper}>
          <Sidebar />
          <main>  
            <Post 
              title="Batata"
              description="Anã"
            />
          </main>
        </div>
    </>
  )
}

export default App
