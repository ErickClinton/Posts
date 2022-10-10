import { Header } from './components/Header'
import {Post} from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'


const posts=[
  {
    id:1,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name:'Diego Fernandes',
      role:'Front end'
    },
    content:[
      {type:'paragraph',content:'Eae '},
      {type:'paragraph',content:'To testando os '},
      {type:'link',content:'Github.com'},

                
    ],
    publishedAt:new Date('2022-05-03 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:'https://avatars.githubusercontent.com/u/62613582?v=4',
      name:'Erick',
      role:'Back end'
    },
    content:[
      {type:'paragraph',content:'Eae Rapaizada'},
      {type:'paragraph',content:'To testando os '},
      {type:'link',content:'Github.com'},

                
    ],
    publishedAt:new Date('2022-09-22 10:00:00')
  },
]


//iteração é repetição
//quando for fazer iteração, usa o Map pq ele retorna algo, diferente do forEach que não retorna nada
//iteração de array, irei percorrer o array e fazer algo
export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
            {posts.map(post=>{
              return(
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
            
        </main>
      </div>

    </div>
    
  )
}

