import { Avatar } from './Avatar'
import { Comment } from './Comments'
import styles from './Post.module.css'
import {format,formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { LineSegment } from 'phosphor-react'
import { useState } from 'react'
//eu desestruturei e só usei o author por isso só coloco author.etc
//poderia colocar props e toda vez escrever props.author.

export function Post({author, publishedAt,content}){
    const [comment,setComments] = useState([
        1,
        2,
        
    ])
    const publishedDateFormatted= format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{
        locale:ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true
    })

    

    function handleCreateNewComment(){
        event.preventDefault()
        
        setComments([...comment,comment.length+1])

        
    }
    return( 
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfor}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                       {publishedDateRelativeToNow}
                </time> 
            </header>
            <div className={styles.content}>
                {content.map(line=>{
                        if(line.type==='paragraph'){
                            return <p>{line.content}</p>
                        }else if(line.type==='link'){
                            return <p><a href="">{line.content}</a></p>
                        }
                    })}
            </div>

            <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comment.map(comment=>{
                    return <Comment />
                })}
            </div>
        </article>
    )
}