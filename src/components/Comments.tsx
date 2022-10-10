import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


// sempre que for atualizar uma informação, e essa informação depende 
//do valor que ela tinha anteriormente, é sempre melhor usar essa função aqui


interface ComentProps{
    content:string;
    onDeleteComment:(comment:string) =>void;
}

export function Comment({content,onDeleteComment}:ComentProps){

    const[likeCount,setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount((state)=>{
            return state+1
        });

    }


    function handleDeleteComment(){

        onDeleteComment(content)
    }
    return(
        <div className={styles.Comment}>
            <Avatar hasBorder={false}src="https://avatars.githubusercontent.com/u/62613582?v=4" alt=" "/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Erick Leite</strong>
                            <time title="11 de Maio às 11:13"dateTime="2022-05-11 08:13:00">Cerca de 1 hora</time> 

                        </div>
                        <button onClick={handleDeleteComment}title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}