import { Header } from "./components/header"
import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Header/>
      <Post 
            author= "Arthur"
            content = "pipipipopopo"
        />
        <Post
          author = "teste"
          content = "swqnhufgwskljdgf"
        />
    </div>
  )
}
