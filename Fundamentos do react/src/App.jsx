import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

import styles from './App.module.css';
import './global.css';

const posts= [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/95095230?v=4',
      name: 'Arthur Emanuel',
      role: 'Dev Junior'
    },
    content:[
      {type: 'paragraph', content: "Fala Galera"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto"},
      {type: 'link', content: 'jane.design/doctorCare'}
    ],
    publishedAt: new Date('2024-12-25 03:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/144635815?v=4',
      name: 'Davi Resende',
      role: 'Dev Front'
    },
    content:[
      {type: 'paragraph', content: "Opaaaa"},
      {type: 'paragraph', content: "SSSSSSSSIUUUUUUUUUUUU"},
      {type: 'link', content: 'pipipi.popopo/NonSei'}
    ],
    publishedAt: new Date('2024-11-12 01:00:00')
  }
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
