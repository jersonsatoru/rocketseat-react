import { Header } from "./components/Header";

import './global.css';

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatar: 'https://github.com/jersonsatoru.png',
      name: 'Jerson Satoru Uyekita',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', data: "Fala galera" },
      { type: 'paragraph', data: "Acabei de subir mais projeto no meu portifólio, É um projeto que fiz no NLW Return, evento da Rocketseat", },
      { type: 'link', data: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-01')
  },
  {
    id: 2,
    author: {
      avatar: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', data: "Fala galera" },
      { type: 'paragraph', data: "Acabei de subir mais projeto no meu portifólio, É um projeto que fiz no NLW Return, evento da Rocketseat", },
      { type: 'link', data: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-02')
  }
]

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(p => (
            <Post
              key={p.id}
              author={p.author}
              content={p.content}
              publishedAt={p.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
