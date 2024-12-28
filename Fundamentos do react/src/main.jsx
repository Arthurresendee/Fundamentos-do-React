import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Post } from './Post'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Post 
        author= "Arthur"
        content = "pipipipopopo"
    />
    <Post
      author = "teste"
      content = "swqnhufgwskljdgf"
    />
  </StrictMode>,
)
