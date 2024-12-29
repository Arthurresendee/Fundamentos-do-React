import { Header } from "./components/header";
import { Post } from "./Post";
import { Sidebar } from "./components/sidebar";

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
              author= "Arthur"
              content = "pipipipopopo"
          />
        <Post
          author = "teste"
          content = "swqnhufgwskljdgf"
        />
      </main>
      </div>
    </div>
  )
}
