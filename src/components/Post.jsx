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
    
    const publishedDateFormatted= format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{
        locale:ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true
    })
    const [comment,setComments] = useState([
        'Posta muito bacana,hein?!'
        
    ])

    const [newCommentText,setNewCommentText]=useState('')

    function handleCreateNewComment(){
        event.preventDefault()
        

        setComments([...comment,newCommentText])
        
        setNewCommentText('')
    }
    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }
    
    function deleteComment(commentToDelete){
        //Nesta função, estpa chamando a lista comment e filtrando ela. caso o comment seja diferente do parametro passado, se mantém na lista
        const commentsWithoudDeletedOne=comment.filter(comment=>{
            return comment !== commentToDelete
        })
        setComments(commentsWithoudDeletedOne);
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
                            return <p key={line.content}>{line.content}</p>
                        }else if(line.type==='link'){
                            return <p key={line.content}><a href="">{line.content}</a></p>
                        }
                    })}
            </div>

            <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comment.map(comment=>{
                    return (
                        <Comment 
                            key={comment}
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}