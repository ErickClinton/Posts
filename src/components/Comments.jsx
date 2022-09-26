import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
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
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Texto dentro parabens</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}